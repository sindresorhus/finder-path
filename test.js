import test from 'ava';
import finderPath from './';

test(t => {
	t.plan(1);

	finderPath((err, dir) => {
		console.log('Path:', dir);
		t.regexTest(/^\/Users/, dir);
	});
});
