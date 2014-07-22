'use strict'

// Bootstrapping function.

// jQuery is already loaded because it's needed for bootstrap (frontend).
require.config({
	paths: { 
		backbone: 'lib/backbone-amd/backbone-min', // Patched for AMD
		underscore: 'lib/underscore-amd/underscore-min', // Patched for AMD
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min'
	}
});

require([
	'app',
], function(App) {
	// Start the backbone app.
	App.init();
});