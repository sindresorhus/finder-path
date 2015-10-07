'use strict';
var runApplescript = require('run-applescript');

module.exports = function () {
	return runApplescript('tell app "Finder" to POSIX path of (insertion location as alias)');
};
