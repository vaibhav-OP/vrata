var ejs = require('ejs');
var terser = require('terser');
var htmlmin = require('html-minifier');

module.exports = function (source) {
  var template = source.toString();

  return 'module.exports = ' + template;

};