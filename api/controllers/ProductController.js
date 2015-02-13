/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	viewManage: function(req, res) {
        Product.find().populate('category').exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "sản phẩm",
                _directory: "product_manage/"
            }); 
        });
	},
};

