/**
* Ingredient.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true},

        name: { type: 'string', size: 50, required: true, unique: true },

        category: { model: 'IngredientCategory' },

        description: { type: 'string'},

        deleted: { type: 'boolean', defaultsTo: false },

        unit: { type: 'string', size: 5, required: true },
        // unit: { type: 'string', size: 5, required: true, enum: ['p', 'mg', 'ml'], defaultsTo: 'cái'},

        limit: {type: 'integer'},

        store: {type: 'store'}

/**
 * Cái này lại bị lỗi :(
 * Ai sửa lại giùm.
 * Lỗi báo ngay chỗ 
 * toJSON: function()
 */
    //     toJSON: function() {
    //         var obj = this.toObject();
    //         //obj.category = obj.category.id;
    //         return obj;
    //     }
    }

};

