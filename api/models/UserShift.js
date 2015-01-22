/**
* UserShift.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {type: 'integer', autoIncrement: true, primaryKey: true},

    user: { model: 'user', required: true },

    starttime: { type: 'datetime', required: true },

    endtime: { type: 'datetime', required: true },

    store: { model: 'store', required: true },
  }
};

