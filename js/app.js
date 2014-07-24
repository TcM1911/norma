//Filename: app.js

define([
'jquery',
'underscore',
'backbone',
'router'
], function ($ , _, Backbone, router) {
	var init = function() {
	  // Start listening for routes.
		console.log("Initialize the router");
		router.init();
	};
	return {
		init: init
	};
});