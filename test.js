import test from 'ava';
import strToArr from './';

const arr = [ 'this', 's$tring', 'has_number3s', 'and', 'hyp-hens' ];

test('Test Array', t => {
	t.truthy(strToArr('This s$tring has_number3s and hyp-hens'), arr);
});
