/**
* BillItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        bill: { model: 'bill', required: true },

        product: { model: 'product', required: true },

        price: { type: 'float', required: true },

        total: { type: 'float', required: true },

        amount: { type: 'integer', required: true }
  }
};

