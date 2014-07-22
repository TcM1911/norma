//Filename: menu.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery', // lib/jquery/jquery
	'underscore', // lib/underscore/underscore
	'backbone', // lib/backbone/backbone
	'text!templates/menu.html'
], function ($, _, Backbone, MenuTemplate) {
	var MenuView = Backbone.View.extend({
		el: $('#menu'),
		render: function() {
			var data = {};
			var Template = _.template(MenuTemplate, data);
			this.$el.html(Template);
		}
	});
	return MenuView;
	// What we return here will be used by other modules
});