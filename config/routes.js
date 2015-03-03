/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'CategoryController.viewManage',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'POST /ingredient/warning/set': {
    controller: 'IngredientController',
    action: 'updateLimit'
  },

  '/store/view/:type?': {
    controller: 'StoreController',
    action: 'view'
  },

  '/ingredient/show/:store': {
    controller: 'IngredientController',
    action: 'getIngredientOf1Store'
  },

  '/ingredient/get-limit/:store/:ingredient': {
    controller: 'IngredientController',
    action: 'getLimitOf1Ingredient'
  },

  '/ingredient/view': {
    controller: 'IngredientController',
    action: 'view'
  },
  
  'get /import': {
    view: 'view_import_ingredient'
  },
  'get /export': {
    view: 'view_export_ingredient'
  },
  'get /export1': {
    view: 'view_export_ingredient1'
  },
  
  'get /warninglimit':{
    view: 'view_warninglimit'
  },

  '/bill/list/:store?': 'BillController.indexByStore',
  '/bill/get/:id?': 'BillItemController.indexBillItem',

  '/services/model': 'ServicesController.getModel',

  '/product/manage/view': 'ProductController.viewManage',

  '/ingredient/manage/view': 'IngredientController.viewManage',
  '/category/manage/view': 'CategoryController.viewManage',
  '/ingredientcategory/manage/view': 'IngredientCategoryController.viewManage',
  '/ingredientstore/manage/view': 'IngredientStoreController.viewManage',
  '/store/manage/view': 'StoreController.viewManage',
/*  '/user/manage/view': 'UserController.viewManage',
  '/chain/manage/view': 'ChainController.viewManage',
  '/store/manage/view': 'StoreController.viewManage',*/


  'POST /stock/show': 'IngredientController.getIngredientAmount',
  'POST /ingredient/export/set': 'IngredientController.exportIngredient',
  'GET /store/show/:ingredient/:type?': 'StoreController.getStoreByIngredient',
};
