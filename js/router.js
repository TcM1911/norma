//Filename: boilerplate.js

define([
'jquery',
'underscore', // lib/underscore/underscore
'backbone', // lib/backbone/backbone
'views/menu',
'views/about',
'views/index',
'views/books',
'views/book',
'views/contact',
'views/partner',
'views/mailinglist'
], function ($, _, Backbone, MenuView, AboutView, IndexView, BooksView, BookView, ContactView, PartnerView, MailinglistView) {
	// Backbone router
	var menuView = new MenuView;
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
			menuView.activateItem('#Home')
		},
		showAbout: function () {
			var aboutView = new AboutView();
			aboutView.render();
			menuView.activateItem('#About');
		},
		showBooks: function () {
			var booksView = new BooksView();
			booksView.render();
			menuView.activateItem('#Books');	
		},
		showBook: function () {
			var bookView = new BookView();
			bookView.render();
		},
		showContact: function () {
			var contactView = new ContactView();
			contactView.render();
			menuView.activateItem('#Contact');
		},
		showPartner: function () {
			var partnerView = new PartnerView();
			partnerView.render();
			menuView.activateItem('#Partners');
		}

	});
	var init = function () {
		var appRouter = new AppRouter;
		console.log("Router started");
		Backbone.history.start(); // Remember the page history for the web browser.
		// Render the menu bar.
		var menuView = new MenuView;
		menuView.render();
		menuView.activateItem('#Home')
		// Render the mailinglist modal
		var mailinglistView = new MailinglistView;
		mailinglistView.render();
	}
	return {init: init};
});