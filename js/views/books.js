//Filename: books.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/books.html'
], function ($, _, Backbone, BooksTemplate) {
	var BooksView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
			var data = {};
			var Template = _.template(BooksTemplate, data);
			this.$el.html(Template);
		}
	});
	return BooksView;
});