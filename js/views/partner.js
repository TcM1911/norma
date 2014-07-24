//Filename: partners.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/partners.html'
], function ($, _, Backbone, PartnersTemplate) {
	var PartnersView = Backbone.View.extend({
		el: $('#content'),
		render: function() {
			var data = {};
			var Template = _.template(PartnersTemplate, data);
			this.$el.html(Template);
		}
	});
	return PartnersView;
});