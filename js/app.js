//Filename: app.js

define([
'underscore',
'backbone',
'router' // router.js
], function (_, Backbone, Router) {
	var initialize = function() {
		// Start listening for routes.
		Router.initialize();
	}
	return {
		initialize: initialize
	};
});