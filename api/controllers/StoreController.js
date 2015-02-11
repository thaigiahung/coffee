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
						'message': 'Lỗi'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Không tìm thấy cửa hàng!'
					});
				}
				else
				{
					res.json({
						'status': 1,
						'message': 'success',
						'store': found
					});
				}			
			});
		}
		else //Get all store
		{
			Store.find().exec(function (err, found) {
				console.log(found);
				if(err) {
					res.json({
						'status': 0,
						'message': 'Lỗi'
					});
				}
				else if(typeof found == "undefined" || found.length == 0) {
					res.json({
						'status': 0,
						'message': 'Không tìm thấy cửa hàng!'
					});
				}
				else
				{
					res.json({
						'status': 1,
						'message': 'success',
						'store': found
					});
				}			
			});
		}
	},
};

