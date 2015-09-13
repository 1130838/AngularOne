/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function (req, res) {
  res.json([
    {
      name: 'Angular uiRouter',
      info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
      link: '/justAngular'
    }, {
      name: 'Angular uiRouter and Jquery',
      info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
      link: '/jquery'
    }, {
      name: 'Angular uiRouter and Jquery and CSS',
      info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
      link: '/angularAndJqueryAndCss'
    }, {
      name: 'notDefined',
      info: 'Best practice client and server structures allow for more code reusability and maximum scalability',
      link: '/notDefined'
    }, {
      name: 'notDefined',
      info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
      link: '/notDefined'
    }, {
      name: 'notDefined',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
      link: '/notDefined'
    }
  ]);
};
