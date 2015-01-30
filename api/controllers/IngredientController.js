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
		IngredientStore.findOne({ store: req.param('store'), id: req.param('ingredient')  }).populate('ingredient').exec(function (err, found) {
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
					'ingredient': {
									id: found.id,
									name: found.ingredient.name,
									unit: found.ingredient.unit,
									limit: found.limit
								}
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
										{ id: data[i].ingredientid },
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

	getIngredientAmount: function(req, res) {
		var option = parseInt(req.param('option'));
		var ingredientId = req.param('ingredientid');		
		switch(option) {
			case 0: //By id in model ingredient + store id
				var storeId = req.param('storeid');
				IngredientStore.findOne({ store: storeId, ingredient: ingredientId }).exec(function (err, objIngredientStoreLocal) {
					if(err) {
						res.json({
							'status': 0,
							'message': 'Lỗi'
						});
					}
					else if(typeof objIngredientStoreLocal == "undefined") {
						res.json(
						{
							"status": 0,
							"message": "Không tìm thấy nguyên liệu ở kho phụ!"
						});
					}
					else {
						IngredientStore.findOne({ store: 1, ingredient: ingredientId }).exec(function (err, objIngredientStoreMain) {
							if(err) {
								res.json({
									'status': 0,
									'message': 'Lỗi'
								});
							}
							else if(typeof objIngredientStoreMain == "undefined") {
								res.json(
								{
									"status": 0,
									"message": "Không tìm thấy nguyên liệu ở kho chính!"
								});
							}
							else {
								res.json(
								{
									"status": 1,
									"message": "Bạn đã xuất nguyên liệu thành công!",
									"mainstock": objIngredientStoreMain.instock,
									"localstock": objIngredientStoreLocal.instock
								});
							}
						});
					}
				});
				break;
			case 1: //By id in model IngredientStore
				IngredientStore.findOne({ id: ingredientId }).exec(function (err, objIngredientStoreLocal) {
					if(err) {
						res.json({
							'status': 0,
							'message': 'Lỗi'
						});
					}
					else if(typeof objIngredientStoreLocal == "undefined") {
						res.json(
						{
							"status": 0,
							"message": "Không tìm thấy nguyên liệu ở kho phụ!"
						});
					}
					else {
						IngredientStore.findOne({ store: 1, ingredient: objIngredientStoreLocal.ingredient }).exec(function (err, objIngredientStoreMain) {
							if(err) {
								res.json({
									'status': 0,
									'message': 'Lỗi'
								});
							}
							else if(typeof objIngredientStoreMain == "undefined") {
								res.json(
								{
									"status": 0,
									"message": "Không tìm thấy nguyên liệu ở kho chính!"
								});
							}
							else {
								res.json(
								{
									"status": 1,
									"message": "Bạn đã xuất nguyên liệu thành công!",
									"mainstock": objIngredientStoreMain.instock,
									"localstock": objIngredientStoreLocal.instock
								});
							}
						});
					}
				});
				break;
			default:
				res.json(
					{
						"status": 0, 
						"message": "Không thể lấy thông tin nguyên liệu!"
					}
				);
				break;
		}
	},

	exportIngredient: function(req, res) {
		var input = {
					    'where': '{"or":[{"id":1},{"id":2}]}',
					    'from': 'ingredientstore',
					    'message': false,
					    'log': true,
					    'action': 'find'
					};
					crud(input, function(found){
					    res.json(found);
					});
		/*var option = parseInt(req.param('option'));
		switch(option){
			case 0: //Export multiple ingre for all store				
				var datas = JSON.parse(req.param('data'));

				for(var i = 0; i < datas.length; i++)
				{
					var ingredientId = parseInt(datas[i].ingredientid);
					var stock = parseInt(datas[i].stock);

					IngredientStore.find({ ingredient: ingredientId, sort: 'store ASC' }).populate('ingredient').exec(function (err, arrIngredientStore) {

						//Length of arrIngredientStore should be at least 1 because the main store must has this ingredient. There should alway be at least one record which has store = 1 and ingredient = ingredientId (Store = 1 is main store)
						//If this record is not exist => the main store does not has this ingredient
						if(err || arrIngredientStore.length < 1) 
						{
							return res.json(
								{
									"status": 0, 
									"message": "Không thể xuất nguyên liệu!"
								}
							);
						}
						else 
						{
							//Main store will not be counted
							var numOfStore = arrIngredientStore.length - 1; 

							//Total amount of ingredient need to export for all local store
							var amountOfIngredient = numOfStore * stock;

							//Because the array is sort by store id => the first one should be store 1 (Main store)
							//If total amount > amount of ingredient of main store => not enough
							if(amountOfIngredient > arrIngredientStore[0].instock)
							{
								return res.json(
									{
										"status": 0, 
										"message": arrIngredientStore[0].ingredient.name + " không đủ nguyên liệu!"
									}
								);
							}
							else //Enough amount instock to export
							{
								for(var j = 0; j < arrIngredientStore.length; j++)
								{
									var objIngredientStore = arrIngredientStore[j];
									var instock = 0;
									if(j == 0) //Main store: - total amount
									{
										instock = objIngredientStore.instock - amountOfIngredient;
									}
									else //Local store: + input stock amount
									{
										instock = objIngredientStore.instock + stock;
									}

									//Update DB
									IngredientStore.update({id:objIngredientStore.id},{instock:instock}).exec(function(err,updated){
										if(err)
										{
											return res.json(
												{
													"status": 0, 
													"message": "Không thể xuất nguyên liệu!"
												}
											);
										}
									});
								}
							}
						}
					});
				}
				//Bị lỗi do return bên trong con
				return res.json(
					{
						"status": 1, 
						"message": "Bạn đã xuất nguyên liệu thành công!"
					}
				);	
				break;
			case 1: //Export multiple ingre for 1 store

				break;
			case 2: //Export 1 ingre for multiple store
				break;
			default:
				res.status(500);
				return res.json(
					{
						"status": 0, 
						"message": "Không thể xuất nguyên liệu!"
					}
				);
				break;
		}*/
	},
};
