/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	viewManage: function(req, res) {
		Product.find().populate('category').exec(function (err, ingredients) {
			return res.view('product_manage_view', {data: ingredients}); 
		});
	},
};

