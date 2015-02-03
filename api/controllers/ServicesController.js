/**
 * ServicesController
 *
 * @description :: Server-side logic for customized model service
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getModel: function(req, res) {
		var input = {
		    'from': req.param('from'),
		    'message': req.param('message'),
		    'log': req.param('log'),
		    'action': req.param('action')
		};
		model.crud(input, function(found){
		    return res.json(found);
		});
	},
};

