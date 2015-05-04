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
        var input = JSON.parse(req.query.input);
        var startDate = input.time1;
        var endDate = input.time2;
        Bill.find({time: { '>=': startDate}},{time: { '<=': endDate}})
        // Bill.find()
        .exec(function(err, found) {    
            var temp_data = new Array();
            var result = {
            message: 'failed',
            status: '1'};

            if(!err) {
                for(var i = 0 ; i < found.length ; i++) {
                    // console.log(found[i].time);
                    if(temp_data.length == 0 ) {
                        newStore = {
                            store: found[i].store,
                            storename: 'unknown',
                            total: found[i].total,
                            details: [
                                {date: found[i].time, amount: found[i].total}
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
                                        date : found[i].time,
                                        amount : found[i].total
                                    }
                                    temp_data[j].details[temp_data[j].details.length] = newDate;
                                }
                                flag = 1;
                            }
                        }

                        if(flag == 0) {
                            var newStore = {
                                store: found[i].store,
                                storename: "unknown",
                                total: found[i].total,
                                details: [ 
                                    {
                                        date: found[i].time,
                                        amount: found[i].total
                                    }
                                ]
                            };
                            temp_data[temp_data.length] = newStore; 
                        }
                    }
                }

                result["data"] = temp_data;
                result["message"] = 'success';
                result["status"] = 0;
            }
            else {
                console.log(err);
            }

            res.json(result);
        });
    }
};



