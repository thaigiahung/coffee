/**
* Suspendedreceipt.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true },

        customer: { model: 'customer', required : true },

        tax: { type: 'float', required: true },

        discount: { type: 'float' },

        couldpon: { type: 'string' },
  }
};

