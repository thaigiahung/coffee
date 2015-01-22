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
					var ingre = {"ingredientid": found.ingredient.id,"ingredientname": found.ingredient.name};
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
		var t = req.param('option');
		console.log(t);
		console.log(req.param("data"));
		res.send(req.param("data"));
		/**
		 * find one ingredient by id and storeid
		 * then update the limit equal to amount
		 */
		/*Ingredient.update({ id: req.param('id'), store: req.param('storeid') },
			{ limit: req.param('amount') } )
			.exec(function (err, ingredient) {

			//check if there is any error. write to the log and return fail
			if (err) {
				console.log(err);
				return res.json({"status": 0});
			}

			//check if there is no ingredient found. write to the log and return fail
			if (!ingredient || !ingredient.length) {
				console.log("Can not find any ingredient");
				return res.json({"status": 0});
			}

			//if everything is ok, return success
			return res.json({"status": 1});
		});*/
	},

	test: function(req, res) {
		console.log(req);
		res.send("OK");
	}
};
