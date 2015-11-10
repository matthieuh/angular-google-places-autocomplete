// package metadata file for Meteor.js
var packageName = 'matthieuh:angular-google-places-autocomplete'; // https://atmospherejs.com/angularui/angular-ui-router
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.2.7';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: 'Pure AngularJS directive for Google Places Autocomplete',
  git: 'https://github.com/matthieuh/angular-google-places-autocomplete',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.4.0', where); // Dependencies

  api.addFiles('src/autocomplete.js', where); // Files in use
  api.addFiles('src/autocomplete.css', where); // Files in use
});