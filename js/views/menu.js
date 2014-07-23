//Filename: menu.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery', // lib/jquery/jquery
	'underscore', // lib/underscore/underscore
	'backbone', // lib/backbone/backbone
	'text!templates/menu1.html',
	'text!templates/menu2.html',
	'collections/books'
], function ($, _, Backbone, MenuTemplate1, MenuTemplate2, BooksCollection) {
	var MenuView = Backbone.View.extend({
		el: $('#menu'),
		render: function() {
		  var that = this;
		  var books = new BooksCollection();
		  books.fetch({
		    success: function(books) {
			    var TemplatePart1 = _.template(MenuTemplate1,[]);
			    var TemplatePart2 = _.template(MenuTemplate2,[]);
			    // Construct the book list in the menu
			    var Template = TemplatePart1;
			    for(i=1; i <= books.length; i++) {
			      // Get book i from the collection
			      var book = books.get(i);
			      var title;
			      var url = "#book/" + book.get('id');
			      // Check if the book is publised
			      if (book.get('published')  ) {
  			      // Get book title and generate url
  			      title = book.get('title');
			      }
			      else {
			        title = "Upcoming Releases";
			        // Add divider
			        Template += '<li class="divider"></li>';
			      }
            // Generate list item.
            var item = '<li><a href="' + url +'">' + title + '</a></li>';
            // Add list item to the menu.
            Template += item;
			    }
			    
			    Template += TemplatePart2;
			    that.$el.html(Template);
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