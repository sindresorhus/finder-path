import test from 'ava';
import m from './';

test(async t => {
	const dir = await m();
	console.log('Path:', dir);
	t.regex(dir, /^\/Users/);
});
