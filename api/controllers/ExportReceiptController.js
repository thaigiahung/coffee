/**
 * ExportReceiptController
 *
 * @description :: Server-side logic for managing Exportreceipts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    viewManage: function(req, res) {
        ExportReceipt.find()
        .populate('user')
        .populate('store')
        .exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "hóa đơn xuất",
                _directory: "export_receipt_manage/",
                _add: true,
                _detail: true
            }); 
        });
    },
};

