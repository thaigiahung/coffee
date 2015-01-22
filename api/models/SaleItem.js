/**
* SaleItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        sale: { model: 'sale', required: true },

        product: { model: 'product', required: true },

        quantity: { type: 'integer', required: true, defaultsTo: 1 },

        price: { type: 'float' }
    }
};

