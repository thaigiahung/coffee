/**
* Campaign.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true},

        name: { type: 'string', unique: true },

        /**
         * This line will cause the  error :
         * d:\coffee-shop\node_modules\sails\node_modules\waterline\node_modules\waterline-schema\lib\waterline-schema\utils.js:46
         *      return hop.call(obj, prop);
         */
        // stores: { collection: 'store', via: 'campaigns', dominant: true },

        status: { type: 'integer', defaultsTo: 0}
    }
};

