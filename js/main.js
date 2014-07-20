'use strict'

// Bootstrapping function.

// jQuery is already loaded because it's needed for bootstrap (frontend).
require.config({
	paths: { 
		backbone: 'js/lib/backbone-amd/backbone-min.js', // Patched for AMD
		underscore: 'js/lib/underscore-amd/underscore-min.js' // Patched for AMD
	}
});

require([
	'app',
], function(App) {
	App.initialize();
});