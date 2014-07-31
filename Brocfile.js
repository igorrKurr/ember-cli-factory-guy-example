/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

var factoryGuy = pickFiles('vendor', {
   srcDir: '/',
   files: ['ember-data-factory-guy/dist/ember-data-factory-guy.js'],
   destDir: '/assets'
});

module.exports = mergeTrees([app.toTree(), factoryGuy]);
