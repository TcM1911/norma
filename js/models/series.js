// filename: series.js

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var SeriesModel = Backbone.Model.extend({
		defaults: {
			id: "new_series",
			title: "New Series",
			description: "<p>This is a new series</p>"
		}
	});
	return SeriesModel;
});
