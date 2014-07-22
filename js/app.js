//Filename: app.js

define([
'jquery',
'underscore',
'backbone',
'router' // router.js
], function ($ , _, Backbone, router) {
	var init = function() {
		// Start listening for routes.
		console.log("Initialize the router");
//		console(router);
		router.init();
	};
	return {
		init: init
	};
});