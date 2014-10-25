//Filename: series.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/series.html',
	'collections/books',
	'collections/series'
], function ($, _, Backbone, SeriesTemplate, BookCollection, SeriesCollection) {
	var BooksView = Backbone.View.extend({
		el: $('#content'),
		render: function(SeriesId) {
		  var that = this;
		  var books = new BookCollection();
		  var Series = new SeriesCollection();
		  Series.fetch({
		  	success: function(Series) {
		  		// Get series information
		  		var series = Series.get(SeriesId);
		  		var title = series.get('title');
		  		var description = series.get('description');
		  		
		  		// Get book covers in the series
		  		books.fetch({
				    success: function(books) {
				      var coverLinks = [];
				      var bookId = [];
				      _.each(
				      		books.filter(function(book) {
					      		return book.get("series") === SeriesId; }),
					      	function(book, i) {
				        		coverLinks[i] = book.get('cover');
				        		bookId[i] = book.get('id');
				      });
			        var Template = _.template(SeriesTemplate, {
			        	coverLinks: coverLinks,
			        	bookId: bookId,
			        	seriesId: SeriesId,
			        	seriesTitle: title,
			        	seriesDescription: description
			        	});
				    	that.$el.html(Template);
				    }
				  });
		  	}
		  })
		}
	});
	return BooksView;
});