/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
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
            Role.find().exec(function (err, found) {
                return res.view('manage_view', {
                    data: found,
                    _name: " loại tài khoản",
                    _directory: "role_manage/",
                    _add: true
                }); 
            });
        }        
    },
};

