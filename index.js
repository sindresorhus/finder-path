'use strict';
const runApplescript = require('run-applescript');

module.exports = () => runApplescript('tell app "Finder" to POSIX path of (insertion location as alias)');
