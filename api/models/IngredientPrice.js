/**
* IngredientPrice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {type: 'integer', autoIncrement: true, primaryKey: true},

    ingredient: { model: 'ingredient', required: true },

    time: { type: 'datetime', required: true },

    //price per unit
    price: { type: 'float', required: true },

    //because the price may be various base on the buying amount
    amount: { type: 'integer' },

    //because the price may not be the same for each store
    store: { model: 'store', required: true },
  }
};

