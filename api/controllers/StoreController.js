/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	view: function(req, res) {
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
	},
};

