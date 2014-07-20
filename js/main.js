'use strict'

// Bootstrapping function.

// jQuery is already loaded because it's needed for bootstrap (frontend).
require.config({
	paths: {
		underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js'
	}
});

require([
	'app',
], function(App) {
	App.initialize();
});