/**
 * IngredientCategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        IngredientCategory.find().exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "loại nguyên liệu",
                _directory: "ingredient_category_manage/",
                _add: true
            }); 
        });
    },
};

