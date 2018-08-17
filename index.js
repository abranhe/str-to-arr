'use strict';

module.exports = (str) => {
	let arr = [];
	let words = str.replace(/\s+/g, ' ').toLowerCase().split(' ');

	words.forEach(word => {
		arr.push(word);
	});

	return arr;
};
