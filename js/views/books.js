//Filename: books.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/books.html',
	'collections/books'
], function ($, _, Backbone, BooksTemplate, BookCollection) {
	var BooksView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
		  var that = this;
		  var books = new BookCollection();
		  books.fetch({
		    success: function(books) {
		      // Get all cover links
		      var coverLinks = [];
		      var bookURL = [];
		      books.each(function(book, i) {
		        coverLinks[i] = book.get('cover');
		        var series = (book.get('series') !== false) ? book.get('series') : "standalone";
		        var id = book.get('id');
		        bookURL[i] = series + "/" + id;
		      });
	        var Template = _.template(BooksTemplate, {coverLinks: coverLinks, bookURL: bookURL});
		    	that.$el.html(Template);
		    }
		  });
		}
	});
	return BooksView;
});