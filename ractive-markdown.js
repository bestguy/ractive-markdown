var renderer = require('markdown-it');
var md = renderer({
  breaks: true,
  linkify: true,
  typographer: true
});

var light = require('markdown-it-emoji');
md.use(light);

function markdown(text) {
  return text ? md.render(text) : text;
}

// Self-registering in Ractive:

var Ractive = require('ractive');
var helpers = Ractive.defaults.data;

helpers.md = markdown;

// Exporting for testing:

module.exports = {
  md: markdown
}