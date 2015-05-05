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


        Store.find().exec(function(err, foundStore) {
            var stores = new Array();
            var result = {
            message: 'failed',
            status: 0};

            if(err) 
                return res.json(result);

            for( var i = 0 ; i < foundStore.length ; i ++) {
                newStoreInfo = {
                    id: foundStore[i].id,
                    name: foundStore[i].name};
                stores[stores.length] = newStoreInfo;
            }

            Bill.find({time: { '>=': startDate}},{time: { '<=': endDate}})
            // Bill.find()
            .exec(function(err, found) {    
                var temp_data = new Array();

                if(!err) {
                    for(var i = 0 ; i < found.length ; i++) {
                        // console.log(found[i].time);
                        if(temp_data.length == 0 ) {
                            var name = "";
                            for(var m = 0 ; m < stores.length ; m ++) {
                                if(stores[m].id == found[i].id)
                                    name = stores[m].name;
                            }
                            newStore = {
                                storeid: found[i].store,
                                storename: name,
                                total: found[i].total,
                                details: [
                                    {date: convertDate(found[i].time), amount: found[i].total}
                                ]
                            }
                            temp_data[0] = newStore;
                        }
                        else {
                            var flag = 0;
                            for(var j = 0 ; j < temp_data.length ; j ++) {
                                if(temp_data[j].store == found[i].store && flag == 0) {
                                    var flag2 = 0;
                                    for(var k = 0 ; k < temp_data[j].details.length ; k ++) {
                                        if(temp_data[j].details[k].date.setHours(0,0,0,0) == found[i].time.setHours(0,0,0,0) && flag2 == 0) {
                                            temp_data[j].details[k].amount += found[i].total;
                                            flag2 == 1;
                                        }
                                    }
                                    if(flag2 == 0) {
                                        var newDate = {
                                            date : convertDate(found[i].time),
                                            amount : found[i].total
                                        }
                                        temp_data[j].details[temp_data[j].details.length] = newDate;
                                    }
                                    flag = 1;
                                }
                            }

                            if(flag == 0) {
                                var name = "";
                                for(var m = 0 ; m < stores.length ; m ++) {
                                    if(stores[m].id == found[i].id)
                                        name = stores[m].name;
                                }
                                var newStore = {
                                    storeid: found[i].store,
                                    storename: name,
                                    total: found[i].total,
                                    details: [ 
                                        {
                                            date: convertDate(found[i].time),
                                            amount: found[i].total
                                        }
                                    ]
                                };
                                temp_data[temp_data.length] = newStore; 
                            }
                        }
                    }

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


                    for(var m = 0 ; m < dateRange.length ; m ++) {
                        for(var i = 0 ; i < temp_data.length ; i ++ ) {
                            var flag = 0;
                            for( var j = 0 ; j < temp_data[i].details.length ; j ++) {
                                var dateNull = new Array();
                                if(temp_data[i].details[j].date == dateRange[m] && flag == 0) {
                                    console.log("flag = 1");
                                    flag = 1;
                                }
                                else {
                                    dateNull.push({
                                        date: dateRange[m],
                                        amount: 0
                                    });
                                }
                            }
                            for(var n = 0 ; n < dateNull.length ; n ++) {
                                temp_data[i].details[temp_data[i].details.length] = dateNull[n];
                            }
                        };
                    }

                    result["data"] = temp_data;
                    result["message"] = 'success';
                    result["status"] = 1;
                }
                else {
                    console.log(err);
                }

                res.json(result);
            });
        });
    },

    getModel: function(req, res) {
        crud(req, function(found){
            return res.json(found);
        });
    },
};



