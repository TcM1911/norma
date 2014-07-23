//Filename: book.js

define([
 // These are path alias that we configured in our bootstrap
'jquery',
'underscore',
'backbone',
'text!templates/book.html',
'collections/books'
], function ($, _, Backbone, BookTemplate, BooksCollection) {
	var BookView = Backbone.View.extend({
	  el: $('#content'),
	  render: function(bookId) {
	    var that = this;
	    var books = new BooksCollection();
	    books.fetch({
	      success: function(books) {
	        var book = books.get(bookId);
	        data = {
	          tagline: book.get('tagline'),
	          cover: book.get('cover'),
	          body: book.get('body'),
	          azLink: book.get('amazonLink'),
	          nookLink: book.get('nookLink'),
	          googleLink: book.get('googlePlayLink'),
	          azActive: book.get('amazonActive'),
	          nookActive: book.get('nookActive'),
	          googleActive: book.get('googleActive')
	        };
	        
	        // Generate the page from the template.
	        var Template = _.template(BookTemplate, data);
	        that.$el.html(Template);
	        }
	     });
	  }
	});
	
	return BookView;
	// What we return here will be used by other modules
});