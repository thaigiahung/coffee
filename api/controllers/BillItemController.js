/**
 * BillItemController
 *
 * @description :: Server-side logic for managing receiptitems
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	indexBillItem: function(req, res){
        BillItem.find({ bill: req.param('id')}).exec(function (err, billItems){
            var result;
            if (err) {
                result = {
                    		"status": 0,
                    		"message": "Lỗi!"
                		}
            }
            else if(typeof billItems == "undefined") {
	            result = {
    	            		"status": 0,
    	            		"message": "Không tìm thấy chi tiết hóa đơn!"
    	        		}
            }
            else{
    	        result = {
        	        		"status": 1,
        	        		"message": "Thành công!",
        	        		"data": billItems
        	    		}
            }
            res.view('view_bill_items', {result: result});
        })
    }
};

