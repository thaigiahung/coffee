/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
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
            Product.find().populate('category').exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: "sản phẩm",
                    _directory: "product_manage/",
                    _add: true,
                    user: req.session.user
                }); 
            });
        }        
	},

    view: function(req, res) {
        if(!req.session.user) {
            res.locals.layout = false; //Don't use layout
            res.view('login');
        }
        else if(req.session.user.role != 2) {
            res.locals.layout = false; //Don't use layout
            res.view('permission-denied');
        }
        else {
            Product.find().populate('category').exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: "product",
                    _directory: "product_view/",
                    _add: true,
                    user: req.session.user
                }); 
            });
        }        
    },
};

