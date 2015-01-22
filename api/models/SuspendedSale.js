/**
* SuspendedSale.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        ref: { type: 'string'},

        customer: { model: 'customer' },

        subtotal: {type: 'float'},

        tax: {type: 'float'},

        discount: {type: 'float'},

        coupon: { model: 'coupon' },

        total: {type: 'float'},

        totalItem: {type: 'integer'},

        user: { model: 'user'}

    }
};

