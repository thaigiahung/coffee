/**
* ExportReceiptItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        receiptid: {type: 'string', unique: true, required: true},

        amount: {type: 'float'},

        ingredient: {type: 'ingredient'},

        unitprice: {type: 'float'},

        total: {type: 'float'},
  }
};
