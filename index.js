'use strict';
var runApplescript = require('run-applescript');

module.exports = function (cb) {
	var script = 'tell app "Finder" to POSIX path of (insertion location as alias)';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return
		}

		cb(null, res);
	});
};
