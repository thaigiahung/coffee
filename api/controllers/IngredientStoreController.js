/**
 * IngredientStoreController
 *
 * @description :: Server-side logic for managing ingredientstores
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
            IngredientStore.find().populate('store').populate('ingredient').exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: " số lượng tồn",
                    _directory: "ingredient_store_manage/",
                    _add: false,
                    user: req.session.user
                }); 
            });   
        }        
    },

    view: function(req, res) 
    {
        if(!req.session.user) 
        {
            res.locals.layout = false; //Don't use layout
            res.view('login');
        }
        else if(req.session.user.role != 2) 
        {
            res.locals.layout = false; //Don't use layout
            res.view('permission-denied');
        }
        else 
        {            
            Store.findOne({manager: req.session.user.id}).exec(function (err, store) 
            {
                IngredientStore.find({store: store.id}).populate('store').populate('ingredient').exec(function (err, found) {
                    return res.view('manage_view', {
                        data: found,
                        _name: " số lượng tồn",
                        _directory: "ingredient_store_view/",
                        _add: false,
                        user: req.session.user
                    }); 
                });   
            });            
        }        
    },
};

