'use strict';
var runApplescript = require('run-applescript');

module.exports = function () {
	var script = 'tell app "Finder" to POSIX path of (insertion location as alias)';

	return runApplescript(script);
};
