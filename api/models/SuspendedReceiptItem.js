/**
* SuspendedReceiptItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        // suspendedreciept: { model: 'suspendedreceipt', required: true },

        // product: { model: 'product', required: true },

        amount: { type: 'int', required: true },

        price: { type: 'float', required: true },
  }
};

