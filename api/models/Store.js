/**
* Store.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        name: { type: 'string', unique: true },

        address: { type: 'string', required: true , unique: true},

        phone: { type: 'string', required: true },

        chain: { model: 'chain' },

        manager: { model: 'user', required: true },

        owner: { model: 'user' },

        deleted: { type: 'boolean', defaultsTo: false },

        // Add a reference to User
        owners: {
            collection: 'user',
            via: 'storeowners',
            dominant:true
        },
  }
};

