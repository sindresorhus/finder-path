# finder-path [![Build Status](https://travis-ci.org/sindresorhus/finder-path.svg?branch=master)](https://travis-ci.org/sindresorhus/finder-path)

> Get the path of the current directory in Finder (OS X)


## Install

```
$ npm install --save finder-path
```


## Usage

```js
const finderPath = require('finder-path');

finderPath.then(path => {
	console.log(path);
	//=> '/Users/sindresorhus/dev/finder-path/'
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
