/**
* Log_productSale.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id: { type: 'integer', autoIncrement: true, primaryKey: true},

    product: { model: 'product', required: true },

    store: { model: 'store', required: true },

    quantity: { type: 'integer', required: true },

    date: { type: 'datetime', required: true },
  }
};

