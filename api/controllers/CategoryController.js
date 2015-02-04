/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        Category.find().exec(function (err, ingredients) {
            return res.view('product_category_manage_view', {data: ingredients}); 
        });
    },
};

