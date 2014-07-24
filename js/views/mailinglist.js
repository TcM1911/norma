//Filename: mailinglist.js

define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'text!templates/mailinglist.html'
], function ($, _, Backbone, MailinglistTemplate) {
	var MailinglistView = Backbone.View.extend({
		el: $('#modal'),
		render: function() {
			var data = {};
			var Template = _.template(MailinglistTemplate, data);
			this.$el.html(Template);
		}
	});
	return MailinglistView;
});