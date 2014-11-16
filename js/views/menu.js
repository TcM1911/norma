//Filename: menu.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery', // lib/jquery/jquery
	'underscore', // lib/underscore/underscore
	'backbone', // lib/backbone/backbone
	'text!templates/menu1.html',
	'text!templates/menu2.html',
	'collections/books',
	'collections/series'
], function ($, _, Backbone, MenuTemplate1, MenuTemplate2, BooksCollection, SeriesCollection) {
	var MenuView = Backbone.View.extend({
		el: $('#menu'),
		render: function() {
		  var that = this;
		  var books = new BooksCollection();
		  var series = new SeriesCollection();
		  series.fetch({
		  	success: function(series) {
		  		books.fetch({
				    success: function(books) {
					    var Template = _.template(MenuTemplate1,[]);
					    var TemplatePart2 = _.template(MenuTemplate2,[]);
					    
					    // Construct the book list in the menu
					    series.each(function(Series) {
					    	var seriesId = Series.get('id');
					    	var seriesTitle = Series.get('title');

					    	// Making sure there are published books in the series.
					    	if(books.some(function(book) { return book.get('series') === seriesId})) {
					    		Template += '<li class="dropdown-submenu dropdown-mouseover menuItem"><a href="#' + seriesId + '">' + seriesTitle + '</a><ul class="dropdown-menu dropdown-mouseover" role="menu">';

						    	_.each(list = books.filter(function(book) {
						    		return book.get('series') === seriesId;
						    	}), 
						    	function(book, i) {
					    			var bookId = book.get('id');
					    			var title = book.get('title');
					    			var url = "#" + seriesId + "/" + bookId;
					    			Template += '<li><a href="' + url +'">' + title + '</a></li>';
						    		
						    		// Adding closing <li> to submenu
						    		if(i === list.length - 1) {
						    			Template += '</ul></li>';
						    		}
						    	});
					    	}
					    });

					    // Adding standalone titles
					    books.each(function(book, j) {
					    	if(book.get('published') && !book.get('series')) {
					    		var bookId = book.get('id');
					    		var title = book.get('title');
					    		var url = "#standalone/" + bookId;
					    		Template += '<li><a href="' + url +'">' + title + '</a></li>';
					    	}
					    });

					    // Adding coming titles
					    if(books.some(function(book) { return book.get('published') === false})) {
					    	Template += '<li class="divider"></li>';
					    	Template += '<li class="dropdown-submenu dropdown-mouseover menuItem"><a>Coming Soon</a><ul class="dropdown-menu dropdown-mouseover" role="menu">';
						    books.each(function(book, j) {
						    	if(!book.get('published')) {
						    		var bookId = book.get('id');
						    		var title = book.get('title');
						    		var url = "#standalone/" + bookId;
						    		Template += '<li><a href="' + url +'">' + title + '</a></li>';
						    	}
						    	// Adding closing <li> to submenu
					    		if(j === books.length - 1) {
					    			Template += '</ul></li>';
					    		}
						    });
					    }

					    Template += TemplatePart2;
					    that.$el.html(Template);
				    }
				});
		  	}
		  });
		},
		activateItem: function(newElement) {
			// Remove the old element
			$('.menuItem').filter('.active').removeClass('active');
			$(newElement).addClass('active');
		}
	});
	return MenuView;
	// What we return here will be used by other modules
});
