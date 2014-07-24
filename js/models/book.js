// filename: book.js

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var BookModel = Backbone.Model.extend({
		defaults: {
			published: false
		}
	});
	return BookModel;
});
