/**
 * ServicesController
 *
 * @description :: Server-side logic for customized model service
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getModel: function(req, res) {
		crud(req, function(found){
		    return res.json(found);
		});
	},

    getSaleNumber: function(req, res) {
        function convertDate(date) {
            // var strDate = Date.parse(date);
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            if(mm < 10)
                mm = "0" + mm;
            var yyyy = date.getFullYear();
            var result = dd + "/" + mm + "/" + yyyy;
            
            return result;
        };

        function convertDate(date) {
            // var strDate = Date.parse(date);
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            if(mm < 10)
                mm = "0" + mm;
            var yyyy = date.getFullYear();
            var result = dd + "/" + mm + "/" + yyyy;
            
            return result;
        };

        var input = JSON.parse(req.query.input);
        var startDate = input.time1;
        var endDate = input.time2;

        var dateRange = new Array();

        var lowerBound = new Date(startDate);
        var upperBound = new Date(endDate);
        var temp = (upperBound - lowerBound) / 86400000;

        for(var i = 0 ; i <= temp ; i ++) {
            var newDate = lowerBound.getDate()+i;
            if(lowerBound.getMonth()+1 < 10) 
                var newMonth = "0" + (lowerBound.getMonth()+1);
            else
                var newMonth = lowerBound.getMonth()+1;
            var newYear = lowerBound.getFullYear();
            dateRange.push(newDate+"/"+newMonth+"/"+newYear);
        }

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
                            date: dateRange[d],
                            amount: 0
                        }
                        newProduct.sale.push(clone(newDate));
                        // newProduct.sale.push(clone(newDate));
                    }
                    cProducts.push(clone(newProduct));
                    // cProducts.push(clone(newProduct));
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
                            // cStores.push(clone(newStore));
                        }
                    }
                    Bill.find({time: { '>=': startDate}},{time: { '<=': endDate}})
                    .exec(function(BillError, bills) {
                        if(BillError)
                            return res.json(result);
                        else {
                            async.eachSeries(bills, function(bill, callback) {
                                BillItem.find({bill: bill.id}).exec(function(biErr, items) {
                                    if(biErr) {
                                        return res.json(result);
                                    }
                                    else {
                                        for(var i = 0 ; i < items.length; i++) {
                                            for(var s = 0 ; s < cStores.length; s++) {
                                                if(cStores[s].storeid == bill.store) {
                                                    // console.log("storeid: " +cStores[s].storeid );
                                                    // console.log("bill.store: " + bill.store );
                                                    for(var p = 0 ; p < cStores[s].details.length ; p++) {
                                                            // console.log(items[i].product);
                                                        if(items[i].product == cStores[s].details[p].productid) {
                                                            for(var d = 0 ; d < cStores[s].details[p].sale.length ; d++) {
                                                                if(convertDate(bill.time) == cStores[s].details[p].sale[d].date) {
                                                                    cStores[s].details[p].sale[d].amount += items[i].amount;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if(bill.id == bills[bills.length-1].id) {
                                        result.data=cStores;
                                        // console.log(cStores[0].details[8]);
                                        console.log(result);
                                        return res.json(result);
                                        // return console.log(result.data[0]);
                                    }
                                });
                                callback();
                            }, function(err) {
                                if(err) {
                                    return res.json(result);
                                }
                            });
                        }
                    });
                });
            }
        });
    },
};

