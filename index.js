/* IMPORTS */

const os = require('os');
const fs = require('fs');
const path = require('path');

/* PATHS */

var paths = {
    node: process.argv[0],
    script: null,
    directory: null,
    temp: null
};

paths.script = process.argv[1];

if (fs.statSync(paths.script).isDirectory()) {
    paths.directory = paths.script + (paths.script.lastChar != path.sep ? path.sep : '');
    paths.script = paths.script + (paths.script.lastChar != path.sep ? path.sep : '') + 'index.js';
} else {
    paths.directory = path.dirname(paths.script) + path.sep || __dirname;
}

paths.temp = os.tmpdir();

/* EXPORTS */

module.exports = paths;