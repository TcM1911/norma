//Filename: contact.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/contact.html'
], function ($, _, Backbone, ContactTemplate) {
	var ContactView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
			var data = {};
			var Template = _.template(ContactTemplate, data);
			this.$el.html(Template);
		}
	});
	return ContactView;
});