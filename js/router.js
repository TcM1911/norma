//Filename: boilerplate.js

define([
'jquery',
'underscore', // lib/underscore/underscore
'backbone', // lib/backbone/backbone
'views/about',
'views/index',
'views/books',
'views/book',
'views/contact',
'views/partner'
], function ($, _, Backbone, AboutView, IndexView, BooksView, BookView, ContactView, PartnerView) {
	// Backbone router
	var AppRouter = Backbone.Router.extend({
		// Url routes
		routes: {
			"": "showIndex",
			'about': 'showAbout',
			'books': 'showBooks',
			'book': 'showBook',
			'contact': 'showContact',
			'partner': 'showPartner'	
		},
		showIndex: function () {
			var indexView = new IndexView();
			indexView.render();
		},
		showAbout: function () {
			var aboutView = new AboutView();
			aboutView.render();
		},
		showBooks: function () {
			var booksView = new BooksView();
			booksView.render();
		},
		showBook: function () {
			var bookView = new BookView();
			bookView.render();
		},
		showContact: function () {
			var contactView = new ContactView();
			contactView.render();
		},
		showPartner: function () {
			var partnerView = new PartnerView();
			partnerView.render();
		}

	});
	var init = function () {
		var appRouter = new AppRouter;
		console.log("Router started");
		Backbone.history.start(); // Remember the page history for the web browser.
		// What we return here will be used by other modules
	}
	return {init: init};
});