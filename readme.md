# finder-path [![Build Status](https://travis-ci.org/sindresorhus/finder-path.png?branch=master)](http://travis-ci.org/sindresorhus/finder-path)

> Get the path of the current directory in Finder (OS X)


## Install

```bash
$ npm install --save finder-path
```


## Example

```js
var finderPath = require('finder-path');

finderPath(function (err, path) {
	console.log(path);
	//=> /Users/sindresorhus/dev/finder-path/
});
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
