/**
* Cashierhistory.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true},

        store: { model: 'store' },

        startdate: { type: 'datetime', required: true },

        enddate: { type: 'datetime', required: true },
  }
};

