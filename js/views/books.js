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
		      coverLinks = [];
		      for (i=1; i <= books.length; i++) {
		        var book = books.get(i);
		        coverLinks[i-1] = book.get('cover');
            // Making sure the page is rendered after the for loop.
  		      if (i === books.length) {
  		        var Template = _.template(BooksTemplate, coverLinks);
    		    	that.$el.html(Template);
  		      }
		      }
		    }
		  });
		}
	});
	return BooksView;
});