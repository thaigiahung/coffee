/**
* Coupon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        id: {type: 'integer', autoIncrement: true, primaryKey: true},

        code: {type: 'string', unique: true},

        type: { type: 'string', required: true, enum: ['percent', 'value'] },

        value: { type: 'float', required: true },

        status: { type: 'string', required: true, enum: ['valid', 'used', 'invalid'], defaultsTo: 'valid'},

        expriedIn: { type: 'integer' },

        // campaign: { model: 'campaign' },
    }
};

