/**
 * ExportReceiptController
 *
 * @description :: Server-side logic for managing Exportreceipts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    viewManage: function(req, res) {
        if(!req.session.user) {
            res.locals.layout = false; //Don't use layout
            res.view('login');
        }
        else if(req.session.user.role != 1) {
            res.locals.layout = false; //Don't use layout
            res.view('permission-denied');
        }
        else {
            ExportReceipt.find()
            .populate('user')
            .populate('store')
            .exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: "export",
                    _directory: "export_receipt_manage/",
                    _add: true,
                    _detail: true,
                    user: req.session.user
                }); 
            });
        }          
    },
};

