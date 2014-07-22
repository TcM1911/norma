// filename: books.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models/book'
], function($, _, Backbone, BookModel) {
	var BooksCollection = Backbone.Collection.extend({
		model: BookModel
	});
	return BooksCollection;
});
