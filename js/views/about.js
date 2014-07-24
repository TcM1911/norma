//Filename: about.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery', // lib/jquery/jquery
	'underscore', // lib/underscore/underscore
	'backbone', // lib/backbone/backbone
	'text!templates/about.html'
], function ($, _, Backbone, AboutTemplate) {
	var MenuView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
			var data = {};
			var Template = _.template(AboutTemplate, data);
			this.$el.html(Template);
		}
	});
	return MenuView;
	// What we return here will be used by other modules
});