/**
 * UserShiftController
 *
 * @description :: Server-side logic for managing usershifts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
	viewLogin: function(req, res) {
		res.locals.layout = false; //Don't use layout
        res.view('login'); 
    },

	login: function(req, res) {
		// https://www.npmjs.com/package/crypto-js		
		var key = req.param('email') + "erp" + req.param("password");
		var hashedPassword = CryptoJS.HmacSHA1(req.param("password"), key);
		hashedPassword = hashedPassword.toString();
		
		User.findOne({ email: req.param('email'), hashedPassword: hashedPassword }).exec(function (err, user) {
			if(err) {
				res.json({
					'status': 0,
					'message': 'Error'
				});
			}
			else if(!user) {
				res.json(
				{
					"message": "Invalid username or password!",
					"status": 0
				});
			}
			else if(user.deleted == 1) {
				res.json(
				{
					"message": "Account is disabled!",
					"status": 0
				});
			}
			else
			{
				req.session.user = user;
				res.json(
				{
					"message": "Success!",
					"status": 1
				});
			}			
		});
    },

    logout: function(req, res) {
    	req.session.user = undefined;
    	res.redirect('login');
    },

    viewManage: function(req, res) {
        User.find().populate('role').exec(function (err, found) {
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
        		    _name: "account",
        		    _directory: "account_manage/",
        		    _add: true,
                    user: req.session.user
        		});     
        	}             
        });
    },

    insert: function(req, res) 
    {
    	if(!req.session.user) 
    	{
    		res.json(
    		{
    			"message": "Please login first!",
    			"status": 0
    		});
    	}
    	else
    	{
    		var key = req.param('email') + "erp" + req.param("password");
    		var hashedPassword = CryptoJS.HmacSHA1(req.param("password"), key);
    		hashedPassword = hashedPassword.toString();

    		User.create({
    			"name": req.param('name'),
    			"email": req.param('email'),
    			"mobile": req.param('mobile'),
    			"role": req.param('role'),
    			"deleted": req.param('deleted'),
    			"hashedPassword": hashedPassword
    		}).exec(function(err,created){
    			if(err)
    			{
    				res.json(
    				{
    					"message": "Cannot create account!",
    					"status": 0
    				});
    			}
    			else
    			{
    				User.findOne(created.id).exec(function (err, found) {
    					res.json(
    					{
    						"message": "Success!",
    						"status": 1,
    						"User": found
    					});
    				});    				
    			}
    		});
    	}
    },

    update: function(req, res) 
    {
    	if(!req.session.user) 
    	{
    		res.json(
    		{
    			"message": "Please login first!",
    			"status": 0
    		});
    	}
    	else
    	{
    		User.findOne(req.param('id')).exec(function (err, user) {
    			if(err)
    			{
    				res.json(
    				{
    					"message": "Account not found!",
    					"status": 0
    				});
    			}
    			else
    			{
    				var hashedPassword = user.hashedPassword;
    				if(req.param('password') != hashedPassword) //Password changed
    				{
    					var key = req.param('email') + "erp" + req.param("password");
    					hashedPassword = CryptoJS.HmacSHA1(req.param("password"), key);
    					hashedPassword = hashedPassword.toString();
    				}

    				User.update({id:req.param('id')},{
    					"name": req.param('name'),
    					"mobile": req.param('mobile'),
    					"role": req.param('role'),
    					"deleted": req.param('deleted'),
    					"hashedPassword": hashedPassword
    				}).exec(function(err,updated){
    					if(err)
    					{
    						res.json(
    						{
    							"message": "Cannot update this account!",
    							"status": 0
    						});
    					}
    					else
    					{
    						User.findOne(req.param('id')).exec(function (err, found) {
    							res.json(
    							{
    								"message": "Success!",
    								"status": 1,
    								"User": found
    							});
    						});
    					}
    				});
    			}
    		});    		
    	}
    },
};

