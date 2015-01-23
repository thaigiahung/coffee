/**
 * IngredientController
 *
 * @description :: Server-side logic for managing materials
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 
module.exports = {
	view: function(req, res) {
		Ingredient.find().exec(function (err, found) {
			//check if there is any error
			if(err) {
				res.json({
					'status': 0,
					'message': 'error'
				});
			}

			//check if there is any product
			if(!found || !found.length) {
				res.json({
					'status': 0,
					'message': 'can not find any ingredient'
				});
			}

			res.json({
				'status': 1,
				'message': 'success',
				'ingredient': found
			});
		});
	},

	getIngredientOf1Store: function(req, res) {		
		IngredientStore.find({ store: req.param('store') }).populate('ingredient').exec(function (err, founds) {
			if(err) {
				res.json({
					'status': 0,
					'message': 'Lỗi'
				});
			}
			else if(typeof founds == "undefined" || founds.length == 0) {
				res.json(
				{
					"message": "Không tìm thấy nguyên liệu!",
					"status": 0
				});
			}
			else
			{
				var arrIngredient = [];
				founds.forEach(function(found){
					var ingre = {"ingredientid": found.id,"ingredientname": found.ingredient.name};
					arrIngredient.push(ingre);
				});
				res.json({
					'status': 1,
					'message': 'Thành công',
					'ingredient': arrIngredient
				});
			}			
		});
	},

	getLimitOf1Ingredient: function(req, res) {		
		IngredientStore.findOne({ store: req.param('store'), ingredient: req.param('ingredient')  }).populate('ingredient').exec(function (err, found) {
			if(err) {
				res.json({
					'status': 0,
					'message': 'Lỗi'
				});
			}
			else if(typeof found == "undefined") {
				res.json(
				{
					"message": "Không tìm thấy nguyên liệu!",
					"status": 0
				});
			}
			else
			{
				res.json({
					'status': 1,
					'message': 'Thành công',
					'ingredient': found.ingredient
				});
			}			
		});
	},

	/**
	 * [description] update the limitation of the ingredient
	 * when the amount of ingredient instock reached this LIMIT
	 * the system will send the notification to general manager
	 *
	 * [input]
	 * object
	 *  option: int (0-Set all stores; 1-Set specific stores)
	 *  data: array
	 *        storeid: int
	 *        ingredientid: int
	 *        limitation: int
	 *
	 * [output]
	 * status: 0-fail, 1-success
	 * message: text
	 */
	updateLimit: function(req, res) {
		var option = req.param('option');
		var data = JSON.parse(req.param("data"));
		
		if(option == 0) //Set limit of all stores
		{
			data = data[0];			
			IngredientStore.update(
									{ ingredient: data.ingredientid },
									{ limit: data.limit }
								)
				.exec(function (err, updated) {
					//check if there is any error.
					if (err) {
						res.json(
							{
								"status": 0, 
								"message": "Không thể cập nhật mức cảnh báo của nguyên liệu!"
							}
						);
					}
					else
						res.json(
								{
									"status": 1, 
									"message": "Bạn đã cập nhật thành công mức cảnh báo của nguyên liệu!"
								}
							);
				});
		}
		else //Set limit of some stores
		{
			/*data.forEach(function(obj){
				IngredientStore.update(
										{ ingredient: obj.ingredientid, store: obj.storeid },
										{ limit: obj.limit})
					.exec(function (err, updated) {
						if (err) {
							res.json(
								{
									"status": 0, 
									"message": "Không thể cập nhật mức cảnh báo của nguyên liệu!"
								}
							);
						}
					});
			});
			res.json(
					{
						"status": 1, 
						"message": "Bạn đã cập nhật thành công mức cảnh báo của nguyên liệu!"
					}
				);*/	
			for(var i = 0; i < data.length; i++)
			{
				IngredientStore.update(
										{ ingredient: data[i].ingredientid, store: data[i].storeid },
										{ limit: data[i].limit})
					.exec(function (err, updated) {
						if (err) {
							res.json(
								{
									"status": 0, 
									"message": "Không thể cập nhật mức cảnh báo của nguyên liệu!"
								}
							);
						}
					});
			}	
			res.json(
					{
						"status": 1, 
						"message": "Bạn đã cập nhật thành công mức cảnh báo của nguyên liệu!"
					}
				);	
		}
	},
};
