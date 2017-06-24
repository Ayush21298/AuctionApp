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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'custom/index'
  },
  '/index.html': {
    view: 'custom/'
  },
  '/card.html': {
    view: 'custom/card'
  },
  '/contact.html': {
    view: 'custom/contact'
  },
  '/faq.html': {
    view: 'custom/faq'
  },
  '/help.html': {
    view: 'custom/help'
  },
  '/login.html': {
    view: 'custom/login'
  },
  '/marketplace.html': {
    view: 'custom/marketplace'
  },
  '/offers.html': {
    view: 'custom/offers'
  },
  '/privacy.html': {
    view: 'custom/privacy'
  },
  '/products.html': {
    view: 'custom/products'
  },
  '/product1.html': {
    view: 'custom/product1'
  },
  '/product2.html': {
    view: 'custom/product2'
  },
  '/product3.html': {
    view: 'custom/product3'
  },
  '/product4.html': {
    view: 'custom/product4'
  },
  '/product5.html': {
    view: 'custom/product5'
  },
  '/product6.html': {
    view: 'custom/product6'
  },
  '/product7.html': {
    view: 'custom/product7'
  },
  '/product8.html': {
    view: 'custom/product8'
  },
  '/product9.html': {
    view: 'custom/product9'
  },
  '/signup.html': {
    view: 'custom/signup'
  },
  '/single.html': {
    view: 'custom/single'
  },
  '/sitemap.html': {
    view: 'custom/sitemap'
  },
  '/values.html': {
    view: 'custom/values'
  },
  '/about.html':{
    view:'custom/about'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
