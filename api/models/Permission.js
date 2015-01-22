/**
* Permission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {type: 'integer', autoIncrement: true, primaryKey: true},

    user: { model: 'user', required: true },

    action: { type: 'string', required: true },

    policy: { type: 'boolean', required: true, defaultsTo: false },
  }
};

