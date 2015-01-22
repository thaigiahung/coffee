/**
* Receipt.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        receiptid: { type: 'string' , required: true, unique: true },

        customer: { model: 'customer' },

        tax: { type: 'float' , required: true},

        discount: { type: 'float' },

        coupon: { type: 'string' },

        subtotal: { type: 'float' , required: true},

        total: { type: 'float' , required: true},

        totalitem: { type: 'integer' , required: true},

        user: { model: 'user' , required: true},

        time: { type: 'datetime' , required: true},

        store: { model: 'store' , required: true},

        //Tiền khách đưa
        received: { type: 'float', required: true }
  }
};

