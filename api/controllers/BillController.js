/**
 * BillController
 *
 * @description :: Server-side logic for managing receipts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    indexByStore: function(req, res){
        Bill.find({ store: req.param('store') }).populate('store').exec(function (err, bills){
            if (err) {
                res.json(
                	{
                		"status": 0,
                		"message": "Lỗi!"
            		}
        		);
            }
            else if(typeof bills == "undefined" || bills.length == 0) {
	            res.json(
	            	{
	            		"status": 0,
	            		"message": "Không tìm thấy hóa đơn!"
	        		}
	    		);
            }
            else{
    	        res.json(
    	        	{
    	        		"status": 1,
    	        		"message": "Thành công!",
    	        		"data": bills
    	    		}
    			);
            }    
        });
        
    },
};

