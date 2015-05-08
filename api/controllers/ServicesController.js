/**
 * ServicesController
 *
 * @description :: Server-side logic for customized model service
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {

    // 5 hours
    getSalesAmount: function(req, res) {
    },

    // 5 hours
    getRevenue: function(req, res) {

        function convertDate(date) {
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
        var clone = require('clone');
        var async = require('async');

        var dateRange = new Array();
        var lowerBound = new Date(startDate);
        var upperBound = new Date(endDate);
        
        if(upperBound > lowerBound) {
            var numberOfDayBetween = (upperBound - lowerBound) / 86400000;
        }
        else {
            res.json(result);
        }


        for(var i = 0 ; i <= numberOfDayBetween ; i ++) {
            var temp = new Date();
            temp.setTime(lowerBound.getTime() + 86400000*i);
            var newDate = new Date(temp)
            dateRange.push(newDate);
        }

        Store.find().exec(function(err, foundStore) {
            var stores = new Array();
            var result = {
            message: 'failed',
            status: 0};

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
                    var newDetails = {date: dateRange[d], amount: 0};
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
                                    if(convertDate(stores[s].details[d].date) == convertDate(bills[b].time)) {
                                        stores[s].details[d].amount += bills[b].total;
                                    }
                                }
                            }
                        }
                    }
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




