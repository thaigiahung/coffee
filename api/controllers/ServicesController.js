/**
 * ServicesController
 *
 * @description :: Server-side logic for customized model service
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function convertDate(date) {
    // var strDate = Date.parse(date);
    var dd = date.getDate();
    if(dd < 10)
        dd = "0" + dd;
    var mm = date.getMonth()+1;
    if(mm < 10)
        mm = "0" + mm;
    var yyyy = date.getFullYear();
    var result = dd + "/" + mm + "/" + yyyy;
    
    return result;
};

function getDateDMY(date) {
    var components = date.split("/");
    var dd = components[0];
    var mm = components[1];
    var yyyy = components[2];
    var result = yyyy+"-"+mm+"-"+dd;
    return result;
};

function getDateRange(startDate, endDate) {
    var dateRange = new Array();
    var lowerBound = new Date(startDate);
    var upperBound = new Date(endDate);
    // dateRange.push(lowerBound);

    if(upperBound > lowerBound) {
        var numberOfDayBetween = (upperBound - lowerBound) / 86400000;
        for(var i = 0 ; i <= numberOfDayBetween ; i ++) {
            var temp = new Date();
            temp.setTime(lowerBound.getTime() + 86400000*i);
            var newDate = new Date(temp)
            dateRange.push(newDate);
        }
    }
    else if(lowerBound.getTime() == upperBound.getTime()) {
        dateRange.push(upperBound);
        return dateRange;
    }
    else {
        return false;
    }

    return dateRange;
};

module.exports = {

    getSaleNumber: function(req, res) {

        var startDate = getDateDMY(req.query.time1);
        var endDate = getDateDMY(req.query.time2);


        var result = {
        message: 'failed',
        status: 0,
        data: new Array()};
        var data;
        var cProducts = new Array();
        var cStores = new Array();
        var billDate;
        var async = require('async');
        var clone = require('clone');
        var newProduct;
        var newStore;

        var dateRange = getDateRange(startDate, endDate);
        if(dateRange == false) {
            result['message'] = 'start day must lower than end date';
            return res.json(result);
        }


        Product.find().exec(function(ProductError, products) {
            if(ProductError) {
                return res.json(result);
            }
            else {
                for(var p = 0; p <products.length ; p ++) {
                    newProduct = {
                        productid: products[p].id,
                        product: products[p].name,
                        sale: new Array()
                    };
                    for(var d = 0; d < dateRange.length; d++) {
                        newDate = {
                            date: convertDate(dateRange[d]),
                            amount: 0
                        }
                        newProduct.sale.push(clone(newDate));
                    }
                    cProducts.push(clone(newProduct));
                }
                Store.find().exec(function(StoreError, stores) {
                    if(StoreError) {
                        return res.json(result);
                    }
                    else {
                        for(var s = 0; s <stores.length ; s ++) {
                            var newStore = {
                                storeid: stores[s].id,
                                storename: stores[s].name,
                                total: 0,
                                details: cProducts
                            };
                            cStores.push(clone(newStore));
                        }
                    }
                    Bill.find({time: { '>=': startDate}},{time: { '<=': endDate}})
                    .exec(function(BillError, bills) {
                        if(BillError)
                            return res.json(result);
                        else {
                            if(bills.length>0) {
                                async.eachSeries(bills, function(bill, callback) {
                                    BillItem.find({bill: bill.id}).exec(function(biErr, items) {
                                        if(biErr) {
                                            // result['message'] = ''
                                            return res.json(result);
                                        }
                                        else {
                                            for(var i = 0 ; i < items.length; i++) {
                                                for(var s = 0 ; s < cStores.length; s++) {
                                                    if(cStores[s].storeid == bill.store) {
                                                        for(var p = 0 ; p < cStores[s].details.length ; p++) {
                                                            if(items[i].product == cStores[s].details[p].productid) {
                                                                for(var d = 0 ; d < cStores[s].details[p].sale.length ; d++) {
                                                                    if(convertDate(bill.time) == cStores[s].details[p].sale[d].date) {
                                                                        cStores[0].details[p].sale[d].amount += items[i].amount;
                                                                        cStores[0].total+= items[i].amount;
                                                                        cStores[s].total+= items[i].amount;
                                                                        cStores[s].details[p].sale[d].amount += items[i].amount;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        result['message'] = 'success';
                                        result['status'] = 1;
                                        if(bill.id == bills[bills.length-1].id) {
                                            result.data=cStores;
                                            return res.json(result);
                                        }
                                    });
                                    callback();
                                }, function(err) {
                                    if(err) {
                                        return res.json(result);
                                    }
                                });
                            }
                            else {
                                result['data'] = cStores;
                                result['status'] = 1;
                                result['message'] = 'success';
                                return res.json(result);
                            }
                        }
                    });
                });
            }
        });
    },

    // 5 hours
    getRevenue: function(req, res) {

        var startDate = getDateDMY(req.query.time1);
        var endDate = getDateDMY(req.query.time2);
        
        var result = {
        message: 'failed',
        status: 0};

        var clone = require('clone');
        var async = require('async');

        var dateRange = getDateRange(startDate, endDate);
        if(dateRange == false) {
            result['message'] = 'start day must lower than end date';
            return res.json(result);
        }

        Store.find().exec(function(err, foundStore) {
            var stores = new Array();

            if(err) 
                return res.json(result);

            for( var i = 0 ; i < foundStore.length ; i ++) {
                newStoreInfo = {
                    storeid: foundStore[i].id,
                    storename: foundStore[i].name,
                    total: 0,
                    details: new Array()
                };
                for(var d = 0; d < dateRange.length; d++ ) {
                    var newDetails = {date: convertDate(dateRange[d]), amount: 0};
                    newStoreInfo.details.push(newDetails);
                }
                stores[stores.length] = newStoreInfo;
            }

            Bill.find({time: { '>=': startDate}},{time: { '<=': endDate}})
            // Bill.find()
            .exec(function(err, bills) {
                if(err) {
                    res.json(result);
                }
                else {
                    for(var b = 0 ; b < bills.length ; b ++ ) {
                        for(var s = 0 ; s < stores.length ; s++ ) {
                            if( bills[b].store == stores[s].storeid ) {
                                for ( var d = 0 ; d < stores[s].details.length ; d ++ ) {
                                    if(stores[s].details[d].date == convertDate(bills[b].time)) {
                                        stores[0].total += bills[b].total;
                                        stores[s].total += bills[b].total;
                                        stores[0].details[d].amount += bills[b].total;
                                        stores[s].details[d].amount += bills[b].total;
                                    }
                                }
                            }
                        }
                    }
                    result['message'] = 'success';
                    result['status'] = 1;
                    result['data'] = stores;
                    return res.json(result);
                }
            });
        });
    },

    getModel: function(req, res) {
        crud(req, function(found){
            return res.json(found);
        });
    },
};




