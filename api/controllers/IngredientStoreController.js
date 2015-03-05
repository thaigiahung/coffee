/**
 * IngredientStoreController
 *
 * @description :: Server-side logic for managing ingredientstores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        IngredientStore.find().populate('store').populate('ingredient').exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: " số lượng tồn",
                _directory: "ingredient_store_manage/",
                _add: false
            }); 
        });
    },
};

