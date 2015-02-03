/**
 * ServicesController
 *
 * @description :: Server-side logic for customized model service
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getModel: function(req, res) {
		model.crud(req, function(found){
		    return res.json(found);
		});
	},
};

