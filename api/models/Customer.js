/**
* Customer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

    attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        phone: {type: 'string', unique: true, required: true},

        password: { type: 'string', required: true },

        name: {type: 'string', required: true},

        gender: {type: 'boolean', required: true},

        discount: {type: 'integer', defaultsTo: 0},

        birthday: {type: 'date'},

        email: {type: 'string' },

        address: {type: 'string' },

        fbId: { type: 'string' },

        gId: { type: 'string' },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function (values, cb) {

        // Encrypt password
        bcrypt.hash(values.password, 10, function(err, hash) {
            if(err) return cb(err);
            values.password = hash;
            //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
            cb();
        });
    }
};

