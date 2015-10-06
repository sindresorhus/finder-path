import test from 'ava';
import fn from './';

test(async t => {
	const dir = await fn();

	console.log('Path:', dir);
	t.regexTest(/^\/Users/, dir);
});
