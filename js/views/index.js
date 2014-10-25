//Filename: books.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/index.html',
	'collections/books',
	'collections/series'
], function ($, _, Backbone, IndexTemplate, BookCollection, SeriesCollection) {
	var IndexView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
		  var self = this;
		  var series = new SeriesCollection();
		  series.fetch({
		  	success: function(series) {
		  		books.fetch({
				    success: function(books) {
				      // Get all cover links
				      var coverLinks = [];
				      var bookSeries = [];
				      var bookId = [];
				      books.each(function(book, i) {
				        coverLinks[i] = book.get('cover');
				        bookSeries[i] = (book.get('series')) ? book.get('series') : "standalone";
				        bookId[i] = book.get('id');
				      });
			        var Template = _.template(IndexTemplate, {coverLinks: coverLinks, bookSeries: bookSeries, bookId: bookId});
				    	self.$el.html(Template);
				    }
				  });
		  	}
		  });
		  var books = new BookCollection();
		}
	});
	return IndexView;
});