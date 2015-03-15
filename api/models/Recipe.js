/**
* RecipeItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    schema: true,

    attributes: {
        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        product: { model: 'product' },

        ingredient: { model: 'ingredient' },

        unit:{type:'string'},

        amount: { type: 'float', required: true },

        product_ingredient: { type: 'string', unique: true },
    },

    beforeValidation : function(values,cb) {
        if(values.product && values.ingredient) {
            values.product_ingredient = values.product+"_"+values.ingredient;
        }
        cb();
    }
};

