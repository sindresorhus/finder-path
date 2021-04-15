import test from 'ava';
import finderPath from './index.js';

test('main', async t => {
	const directory = await finderPath();
	t.log('Path:', directory);
	t.regex(directory, /^\/Users/);
});
