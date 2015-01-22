/**
* Sale.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        receiptId: {type: 'string', unique: true, required: true},

        // customer: { model: 'customer' },

        subtotal: {type: 'float'},

        tax: {type: 'float'},

        discount: {type: 'float'},

        // coupon: { model: 'coupon' },

        total: {type: 'float'},

        totalItem: {type: 'integer'},

        // user: { model: 'user'}

    }
};

