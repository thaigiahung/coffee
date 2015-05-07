/**
 * IngredientController
 *
 * @description :: Server-side logic for managing materials
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


 /**
  * Get all ingredient of main store by array of id
  *
  * @param  {Integer}   type
  * @param  {Array}   arrId
  * @return {Object}
  */
function getIngredientOfMainStoreById (type, arrId, callback) {
 	if(type == 1) //this is IngredientId belongs to model Ingredient
 	{
 		IngredientStore.find({store: 1, ingredient : arrId}).exec(function (err, found) {
 			var status = 1;
 			if(err || found.length == 0)
 				status = 0;
 			var result = {
			 				status: status,
			 				data: found
			 			}
 			callback(result);
 		}); 		
 	}
 	else //this is Id primary key in model IngredientStore
 	{
 		IngredientStore.find({store: 1, id : arrId}).exec(function (err, found) {
 			var status = 1;
 			if(err || found.length == 0)
 				status = 0;
 			var result = {
			 				status: status,
			 				data: found
			 			}
 			callback(result);
 		});
 	}
}

 /**
  * Add mainstock
  *
  * @param  {Integer}   ingredient
  * @return {Object}
  */
function addMainStock (ingredient, oldIngredientStoreObj, callback) {
	IngredientStore.findOne({store: 1, ingredient : ingredient}).exec(function (err, foundMainStore) {
		var mainstock;
		if(err || typeof foundMainStore == "undefined")
			mainstock = 0;
		else
			mainstock = foundMainStore.instock;
		//Add mainstock to oldIngredientStoreObj (Others properties still remain)
		oldIngredientStoreObj.mainstock = mainstock;
	    callback(oldIngredientStoreObj);
	});	
}

 /**
  * Get all IngredientStore by array of id (Primary key)
  * including stock of main store
  *
  * @param  {Array}   arrId
  * @return {Array}
  */
function getIngredientStoreByArrayOfId (arrId, callback) {
	IngredientStore.find({id : arrId}).exec(function (err, founds) {	
		var arr = [];
		if(!err && founds.length > 0)
		{
			//Found will be an array of IngredientStore which have Id belong to arrId
			//Now, we will loop through founds to add mainstock
			var count = founds.length;
			founds.forEach(function(found){
				//Find one record which has store = 1 AND ingredient = found[i].ingredient
				addMainStock(found.ingredient, found, function (obj) {
					arr.push(obj);
					if(count <= 1){
						callback(arr);
					}
					count--;
				});								
			});			
		}
		else
		callback(arr);
	}); 
}

/**
 * Count how many store that has this ingredient except main store
 * Id will be column ingredient in IngredientStore.
 *
 * @param  {Integer}   id
 * @return {Object}
 */
function getNumOfStoreByIngredientId (id, callback) {
	//Find all records that has ingredient = id AND store != 1
	IngredientStore.find({ingredient : id, store: { '!': 1 }}).exec(function (err, found) {
		callback(found.length);
	});
}

function checkAmountOfIngredient (arr, datas, callback) {
	var count = arr.length;
	var flag = 0;
	arr.forEach(function (obj) {
		var stock = 0;
		for(var i = 0; i<datas.length; i++)
		{
			if(datas[i].ingredientid == obj.id)
				stock = datas[i].stock;
		}

		if(obj.mainstock < stock) //Not enough ingredient
		{
			flag = 1;		
		}

		if(count <= 1){
			callback(flag);
		}
		count--;
	});
}
 
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
		    Ingredient.find().populate('category').exec(function (err, found) {
		        return res.view('manage_view', {
		            data: found,
		            _name: " nguyên liệu",
		            _directory: "ingredient_manage/",
		            _add: true
		        }); 
		    });
		}        
	},

	test: function(req, res) {
		model.exec(req, function(found){
			res.json(found);
		});
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
		var option = parseInt(req.param('option'));
		var datas = JSON.parse(req.param('data'));
		switch(option){
			case 0: //Export multiple ingre for all store				
				/*

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
				);	*/
				break;
			case 1: //Export multiple ingre for 1 store
				var arrId = [];
				for(var i = 0; i < datas.length; i++)
				{
					arrId.push(datas[i].ingredientid);
				}
				getIngredientStoreByArrayOfId(arrId,function (arr) {
					if(arr.length == 0)
					{
						return res.json(
							{
								"status": 0, 
								"message": "Không tìm thấy nguyên liệu!"
							}
						);
					}
					else
					{
						checkAmountOfIngredient(arr,datas,function (flag) {
							if(flag == 1)
							{
								return res.json(
									{
										"status": 0, 
										"message": "Không đủ nguyên liệu!"
									}
								);
							}
							else
							{
								arr.forEach(function (obj) {
									datas.forEach(function (data) {
										if(data.ingredientid == obj.id)
										{
											//Update Main Store
											IngredientStore.update({store: 1, ingredient:obj.ingredient},{instock:obj.mainstock - data.stock}).exec(function(err,updated){});

											//Update Local Store
											IngredientStore.update({id: obj.id},{instock:obj.instock + data.stock}, {deleted: 0}).exec(function(err,updated){});
										}
									});
								});
								return res.json(
									{
										"status": 1, 
										"message": "Xuất nguyên liệu thành công!"
									}
								);
							}
						});	
					}
				});
				break;
			case 2: //Export 1 ingre for multiple store
				var total = 0;
				var stores = datas.store;
				for(var i = 0; i < stores.length; i++)
				{
					total += stores[i].stock;
				}
				//Find amount of this ingredient in main store
				IngredientStore.findOne({store: 1, ingredient : datas.ingredientid}).exec(function (err, foundMainStore) {
					if(err || typeof foundMainStore == "undefined")
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
						if(foundMainStore.instock < total)
						{
							return res.json(
								{
									"status": 0, 
									"message": "Không đủ nguyên liệu!"
								}
							);
						}
						else
						{
							//Update Main Store
							IngredientStore.update({id: foundMainStore.id},{instock: foundMainStore.instock - total}).exec(function(err,updated){});

							//Update Local Store							
							stores.forEach(function (store) {
								//First, we need to find amount of this ingredient of the local store
								//Because main store and local store now have the same ingredient
								//so we can use foundMainStore.ingredient
								IngredientStore.findOne({store: store.storeid, ingredient : foundMainStore.ingredient}).exec(function (err, foundLocalStore) {
									var mainstock;
									if(typeof foundLocalStore == "undefined") //Not exist => insert
									{
										IngredientStore.create({
										  store : store.storeid,
										  ingredient : foundMainStore.ingredient,
										  limit : 0,
										  instock: store.stock
										}).exec(function(err,created){});
									}
									else //Exist => update
									{
										//Update amount of this ingredient in local store	
										IngredientStore.update({id: foundLocalStore.id},{instock: foundLocalStore.instock + store.stock}, {deleted: 0}).exec(function(err,updated){});
									}
								});								
							});			
							return res.json(
								{
									"status": 1, 
									"message": "Xuất nguyên liệu thành công!"
								}
							);			
						}
					}
				});	
				break;
			default:
				return res.json(
					{
						"status": 0, 
						"message": "Không thể xuất nguyên liệu!"
					}
				);
				break;
		}
	},

	viewExportIngredient: function(req, res) {
		if(!req.session.user) {
		    res.locals.layout = false; //Don't use layout
		    res.view('login');
		}
		else if(req.session.user.role != 1) {
		    res.locals.layout = false; //Don't use layout
		    res.view('permission-denied');
		}
		else {
	    	var query = "SELECT DISTINCT i.`store`,s.`name` FROM `ingredientstore` i JOIN `store` s ON s.`id` = i.`store` where s.deleted = 0 AND i.store != 1 AND i.`instock` <= i.`limit` ORDER BY i.store";
	        IngredientStore.query(query, function(err, stores) {
	        	Store.find({ id: { '!': 1 }, deleted: 0}).exec(function (err, allStores) {
	        		return res.view('view_export_ingredient', {
	        		    stores: stores,
	        		    allStores: allStores,
                    	user: req.session.user
	        		}); 
	        	});	    	
	        });
		}		
	},

	viewImportIngredient: function(req, res) 
	{
		if(!req.session.user) {
		    res.locals.layout = false; //Don't use layout
		    res.view('login');
		}
		else if(req.session.user.role == 2) 
		{
		    res.redirect('/product/view');
		}
		else if(req.session.user.role == 3) 
		{
		    res.redirect('/segmentation/view');
		}
		else if(req.session.user.role == 1) 
		{		    
	    	return res.view('view_import_ingredient', {user: req.session.user});
		}
		else 
		{
			res.locals.layout = false; //Don't use layout
		    res.view('permission-denied');
		}		
	},
};
