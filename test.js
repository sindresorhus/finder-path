'use strict';
var assert = require('assert');
var finderPath = require('./');

it('should return path of active finder window', function (cb) {
	finderPath(function (err, dir) {
		console.log('Path:', dir);
		assert(/^\/Users/.test(dir));
		cb();
	});
});
