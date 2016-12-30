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
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {



  '/': {
    view: 'homepage'
  },

  ////////////////////////user routes////////////////////
  'get /login' : 'UserController.login',
  'post /login' : 'UserController.connection',
  'get /user/create': 'UserController.create',
  'post /user/create': 'UserController.submit',
  'get /user': 'UserController.getAll',
  'get /user/detail/:id' : 'UserController.detail',
  'get /user/update/:id' : 'UserController.update',
  'post /user/update/:id' : 'UserController.update',
  ////////////////////////user routes////////////////////


  ////////////////////////product routes////////////////////
  'get /product/create': 'ProductController.create',
  'post /product/create': 'ProductController.submit',
  'get /product/create/type': 'ProductController.getAllType',
  'get /product': 'ProductController.getAll',
  'get /product/detail/:id' : 'ProductController.detail',
  'get /product/update/:id' : 'ProductController.update',
  'post /product/update/:id' : 'ProductController.update',
  ////////////////////////product routes////////////////////


  ////////////////////////type routes////////////////////
  'get /type/create': 'TypeController.create',
  'post /type/create': 'TypeController.submit',
  'get /type': 'TypeController.getAll',
  'get /type/detail/:id' : 'TypeController.detail',
  'get /type/update/:id' : 'TypeController.update',
  'post /type/update/:id' : 'TypeController.update',
  ////////////////////////product routes////////////////////

};
