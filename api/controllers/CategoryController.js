/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
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
            Category.find().exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: " loại sản phẩm",
                    _directory: "product_category_manage/",
                    _add: true,
                    user: req.session.user
                }); 
            });
        }        
    },
};

