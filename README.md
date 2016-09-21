Pathinizer
==========

DESCRIPTION
-----------
It's simple module for get correct paths to launched script and few connected directories.
Also it's wrapping few path module functions (sorry, I'm lied here - now only join available).

INSTALLATION
------------
```
npm install pathinizer
```

USAGE
-----
```
const paths = require('pathinizer');

...
// paths to use 
console.log('my application working directory', paths.directory);
console.log('my application temporary directory', paths.temp);
console.log('my application started script file', paths.script);
console.log('link to node is', paths.node);
// wrapped path functions
console.log('path to readme', paths.join(paths.directory, 'README.md'));

```