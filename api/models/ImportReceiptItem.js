/**
* ImportReceiptItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        receiptid: {model: 'ExportReceipt'},

        amount: {type: 'float'},

        ingredient: {model: 'ingredient'},

        unit: {type: 'string'},

        unitprice: {type: 'float'},

        total: {type: 'float'},
  }
};

