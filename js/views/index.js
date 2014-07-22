define([
'jquery',
'underscore',
'backbone',
'text!templates/index.html'
], function ($ , _, Backbone, indexTemplate) {
	var IndexView = Backbone.View.extend({
		el: $('#content'),
		render: function () {
			// Data for _ template
			var data = {};
			console.log(indexTemplate);
			var compiledTemplate = _.template(indexTemplate, data);
			// Send template to the page
			this.$el.html(compiledTemplate);
			console.log('Render index.html');
		}
	});
	return IndexView;
});