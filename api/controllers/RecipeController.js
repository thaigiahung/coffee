/**
 * RecipeController
 *
 * @description :: Server-side logic for managing recipes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewManage: function(req, res) {
        if(!req.session.user) {
            res.locals.layout = false; //Don't use layout
            res.view('login');
        }
        else if(req.session.user.role != 1) {
            res.locals.layout = false; //Don't use layout
            res.view('permission-denied');
        }
        else {
            Bill.find()
            .populate('customer')
            .populate('user')
            .populate('store')
            .exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: " receipt",
                    _directory: "receipt_manage/",
                    _add: true,
                    user: req.session.user
                }); 
            });
        }         
    },

    viewRecipe: function(req, res) {
        if(!req.session.user) {
            res.locals.layout = false; //Don't use layout
            res.view('login');
        }
        else if(req.session.user.role != 1) {
            res.locals.layout = false; //Don't use layout
            res.view('permission-denied');
        }
        else {
            return res.view('view_recipe',{user: req.session.user});
        }   
    },
};

