//Filename: books.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/index.html',
	'collections/books'
], function ($, _, Backbone, IndexTemplate, BookCollection) {
	var IndexView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
		  var self = this;
		  var books = new BookCollection();
		  books.fetch({
		    success: function(books) {
		      // Get all cover links
		      var coverLinks = [];
		      books.each(function(book, i) {
		        coverLinks[i] = book.get('cover');
		      });
	        var Template = _.template(IndexTemplate, {coverLinks: coverLinks});
		    	self.$el.html(Template);
		    }
		  });
		}
	});
	return IndexView;
});