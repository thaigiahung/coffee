function getBillByStore(id, callback) {
    Bill.find({ store: id }).populate('store').exec(function (err, bills){
        var result;
        if (err) {
            result = {
                        "status": 0,
                        "message": "Error!"
                    }
        }
        else if(typeof bills == "undefined" || bills.length == 0) {
            result = {
                        "status": 0,
                        "message": "Bill not found!"
                    }
        }
        else{
            var datas = [];
            for(var i = 0; i < bills.length; i++)
            {
                var data = {
                    id: bills[i].id,
                    customer: (bills[i].customer == null) ? "" : bills[i].customer.name,
                    tax: bills[i].tax,
                    coupon: (bills[i].coupon == null) ? "" : bills[i].coupon,
                    discount: bills[i].discount,
                    subtotal: bills[i].subtotal,
                    total: bills[i].total,
                    total_item: bills[i].totalitem,
                    time: DatetimeService.formatDatetime(bills[i].createdAt),
                    store: (bills[i].store == null) ? "" : bills[i].store.name,
                    received_money: bills[i].received
                }
                datas.push(data);
            }
            result = {
                        "status": 1,
                        "message": "Success!",
                        "data": datas
                    }
        }
        console.log(result);
        return result;
        // res.view('view_bill', {result: result});    
    });
}

exports.getBillByStore = getBillByStore;