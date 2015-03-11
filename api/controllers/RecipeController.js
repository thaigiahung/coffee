/**
 * RecipeController
 *
 * @description :: Server-side logic for managing recipes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        Recipe.find()
        .populate('product')
        .exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "công thức",
                _directory: "recipe_manage/",
                _add: true
            }); 
        });
    },
};


