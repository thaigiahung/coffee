/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true },

        name: { type: 'string' },

        email: { type: 'string' },
        
        store: { model: 'store' },

        mobile: { type: 'string' },

        hashedPassword: { type: 'string', required: true, defaultsTo: "NULL" },

        deleted: { type: 'boolean', defaultsTo: false },

        // Add a reference to User
        storeowners: {
            collection: 'store',
            via: 'owners'
        },

        toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
        }
        // name : 'STRING',
        // email: 'STRING',
        // hashedPassword: 'STRING'
  },

  beforeCreate: function(values, next){
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return next(err);
      values.hashedPassword = hash;
      delete values.password;
      next();
    });
  }

};
