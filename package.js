Package.describe({
  name: "pagereplica:prerender",
  version: "1.0.0",
  summary: "Middleware to handle bot traffic and fetch cached responses for Meteor apps.",
  git: "https://github.com/Page-Replica/meteorjs-prerender.git",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom(['1.0', '1.8', '2.0', '2.5', '2.16', '3.0']);
  api.use(['ecmascript', 'fetch', 'webapp']); // Using 'webapp' for middleware
  
  api.mainModule('meteorjs-prerender.js');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest', 'pagereplica:prerender']);
  api.mainModule('meteorjs-prerender.js', 'server');
});