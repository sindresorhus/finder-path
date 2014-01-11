'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	var script = 'tell app "Finder" to POSIX path of (insertion location as alias)';

	execFile('osascript', ['-e', script], function (err, stdout, stderr) {
		cb(err, stdout);
	});
};
