# finder-path [![Build Status](https://travis-ci.org/sindresorhus/finder-path.svg?branch=master)](https://travis-ci.org/sindresorhus/finder-path)

> Get the path of the current directory in Finder (OS X)


## Install

```sh
$ npm install --save finder-path
```


## Usage

```js
var finderPath = require('finder-path');

finderPath(function (err, path) {
	console.log(path);
	//=> /Users/sindresorhus/dev/finder-path/
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
