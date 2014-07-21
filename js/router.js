//Filename: boilerplate.js

define([
'underscore', // lib/underscore/underscore
'backbone', // lib/backbone/backbone
'views/about',
'views/index',
'views/books',
'views/book',
'views/contact',
'views/partner'
], function (_, Backbone, MenuView, AboutView, IndexView, BooksView, BookView, ContactView, PartnerView) {
	// Backbone router
	var AppRouter = new Backbone.Router.extend({
		// Url routes
		routes: {
			'': 'showIndex',
			'/': 'showIndex',
			'/about': 'showAbout',
			'/books': 'showBooks',
			'/book': 'showBook',
			'/contact': 'showContact',
			'/partner': 'showPartner'
		};
	});

	var initialize: function () {
		var appRouter = new AppRouter();
		appRouter.on('showIndex', function () {
			var indexView = new IndexView();
			indexView.render();
		});
		appRouter.on('showAbout', function () {
			var aboutView = new AboutView();
			aboutView.render();
		});
		appRouter.on('showBooks', function () {
			var booksView = new BooksView();
			booksView.render();
		});
		appRouter.on('showBook', function () {
			var bookView = new BookView();
			bookView.render();
		});
		appRouter.on('showContact', function () {
			var contactView = new ContactView();
			contactView.render();
		});
		appRouter.on('showPartner', function () {
			var partnerView = new PartnerView();
			partnerView.render();
		});
		Backbone.history.start(); // Remember the page history for the web browser.
	}

	// What we return here will be used by other modules
	return {
		initialize: initialize
	};
});