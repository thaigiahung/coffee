/**
 * RecipeItemController
 *
 * @description :: Server-side logic for managing recipeitems
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        RecipeItem.find({ product : req.params['id']})
        .populate('product')
        .populate('ingredient')
        .exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "chi tiết công thức",
                _directory: "recipe_item_manage/",
                _add: true,
            }); 
        });
    },
};