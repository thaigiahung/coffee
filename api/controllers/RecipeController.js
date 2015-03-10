/**
 * RecipeController
 *
 * @description :: Server-side logic for managing recipes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        Bill.find()
        .populate('customer')
        .populate('user')
        .populate('store')
        .exec(function (err, found) {
            return res.view('manage_view', {
                data: found,
                _name: "hóa đơn",
                _directory: "receipt_manage/",
                _add: true
            }); 
        });
    },
};

