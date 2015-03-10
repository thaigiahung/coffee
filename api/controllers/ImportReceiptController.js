/**
 * ImportReceiptController
 *
 * @description :: Server-side logic for managing Importreceipts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    viewManage: function(req, res) {
        ImportReceipt.find()
        .populate('user')
        .exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "hóa đơn nhập",
                _directory: "import_receipt_manage/",
                _add: true,
                _detail: true
            }); 
        });
    },
};

