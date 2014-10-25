// filename: series.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models/series'
], function($, _, Backbone, SeriesModel) {
	var SeriesCollection = Backbone.Collection.extend({
		model: SeriesModel,
		url: '/series.json'
	});
	return SeriesCollection;
});
