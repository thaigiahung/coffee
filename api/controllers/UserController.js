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
					'message': 'Lỗi'
				});
			}
			else if(!user) {
				res.json(
				{
					"message": "Tài khoản hoặc mật khẩu không đúng!",
					"status": 0
				});
			}
			else if(user.deleted == 1) {
				res.json(
				{
					"message": "Tài khoản bị khóa!",
					"status": 0
				});
			}
			else
			{
				req.session.user = user;
				res.json(
				{
					"message": "Đăng nhập thành công!",
					"status": 1
				});
			}			
		});
    },

    logout: function(req, res) {
    	req.session.user = undefined;
    	res.redirect('login');
    },
};

