/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	view: function(req, res) {
		var type = req.param('type');
		if(typeof type == "undefined")
			type = 1;
		
		if(type == 0) //Get all store except id = 1 (Main store)
		{
			Store.find({ id: { '!': 1 }}).exec(function (err, found) {
				if(err) {
					res.json({
						'status': 0,
						'message': 'Error'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Store not found!'
					});
				}
				else
				{
					res.json({
						'status': 1,
						'message': 'Success!',
						'store': found
					});
				}			
			});
		}
		else //Get all store
		{
			Store.find().exec(function (err, found) {
				if(err) {
					res.json({
						'status': 0,
						'message': 'Error'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Store not found!'
					});
				}
				else
				{
					res.json({
						'status': 1,
						'message': 'Success!',
						'store': found
					});
				}			
			});
		}
	},

	getStoreByIngredient: function(req, res) {
		var type = req.param('type');
		if(typeof type == "undefined")
			type = 1;
		
		if(type == 0) //Get all store except store = 1 (Main store)
		{
			IngredientStore.find({ ingredient: req.param('ingredient'), store: { '!': 1 }}).populate('store').exec(function (err, found) {
				if(err) {
					res.json({
						'status': 0,
						'message': 'Error'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Store not found!'
					});
				}
				else
				{					
					res.json({
						'status': 1,
						'message': 'Success!',
						'store': found
					});
				}			
			});
		}
		else //Get all store
		{
			IngredientStore.find({ingredient: req.param('ingredient')}).populate('store').exec(function (err, found) {
				if(err) {
					res.json({
						'status': 0,
						'message': 'Error'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Store not found!'
					});
				}
				else
				{
					res.json({
						'status': 1,
						'message': 'Success!',
						'store': found
					});
				}			
			});
		}
	},
	
    viewManage: function(req, res) {
        Store.find().populate('manager').populate('owner').exec(function (err, found) {
        	if(!req.session.user) {
        	    res.locals.layout = false; //Don't use layout
        	    res.view('login');
        	}
        	else if(req.session.user.role != 1) {
        	    res.locals.layout = false; //Don't use layout
        	    res.view('permission-denied');
        	}
        	else {
        		return res.view('manage_view', {
        		    data: found,
        		    _name: " store",
        		    _directory: "store_manage/",
        		    _add: true,
                    user: req.session.user
        		});     
        	}             
        });
    },
};

