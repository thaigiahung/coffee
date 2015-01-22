/**
* Product.js
*
* @description :: products are what can be saled at local stores
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    schema: true,

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true },

        name: { type: 'string', required: true, unique: true },

        price: { type: 'float', required: true, defaultsTo: 0 },

        image: { type: 'text', required: false },

        description: { type: 'text', required: false },

        category: { model: 'category' },

        deleted: { type: 'boolean', defaultsTo: false },
/**
 * E bỏ cái hàm này thì của e chạy ngon lành :|
 * Coi bên category, ingredient thì đâu có cần cái này đâu ta.
 * Nếu cần thì a check lại đi nhóe,
 * hình như là sai ngay cái khúc obj.category.id thật đó :D
 */
        // toJSON: function() {
        //     var obj = this.toObject();
        //     // var host = sails.getBaseurl() + '/';
        //     var host = '/product-photos/';
        //     obj.category = obj.category.id;
        //     obj.image = host + obj.image;
        //     return obj;
        // }
    }


};

