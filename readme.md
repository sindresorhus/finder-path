# finder-path

> Get the path of the current directory in Finder (macOS)


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

MIT © [Sindre Sorhus](https://sindresorhus.com)
