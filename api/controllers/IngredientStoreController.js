/**
 * IngredientStoreController
 *
 * @description :: Server-side logic for managing ingredientstores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        IngredientStore.find().populate('ingredient').populate('store').exec(function (err, ingredients) {
            return res.view('ingredient_store_manage_view', {data: ingredients}); 
        });
    },
};

