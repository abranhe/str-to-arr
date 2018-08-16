'use strict';

module.exports = (str) => {
	let arr = [];
	let words = str
  .replace(/[.,?!;()"'_]/g, " ")
  .replace(/\s+/g, ' ')
  .toLowerCase()
  .split(' ');

	words.forEach(word => {
        arr.push(word);
	});

	return arr;
};
