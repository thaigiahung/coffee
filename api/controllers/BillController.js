/**
 * BillController
 *
 * @description :: Server-side logic for managing receipts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    indexByStore: function(req, res){
        Bill.find({ store: req.param('store') }).populate('store').exec(function (err, bills){
            var result;
            if (err) {
                result = {
                            "status": 0,
                            "message": "Lỗi!"
                        }
            }
            else if(typeof bills == "undefined" || bills.length == 0) {
                result = {
                            "status": 0,
                            "message": "Không tìm thấy hóa đơn!"
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
                            "message": "Thành công!",
                            "data": datas
                        }
            }
            res.view('view_bill', {result: result});    
        });
    },
    
};

