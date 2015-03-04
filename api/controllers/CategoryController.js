/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        Category.find().exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "loại sản phẩm",
                _directory: "product_category_manage/",
                _add: true
            }); 
        });
    },
};

