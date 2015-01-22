/**
* IngredientStore.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: { type: 'integer', autoIncrement: true, primaryKey: true},

    store: { model: 'store' , required: true},

    ingredient: { model: 'ingredient', required: true },

    limit: { type: 'integer', required: true, defaultsTo: 0},

    instock: { type: 'integer', required: true, defaultsTo: 0 },
  }
};

