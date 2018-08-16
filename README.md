<p align="center" id="top">
	<a href="https://www.npmjs.com/package/str-to-arr"><img src="https://cdn.abraham.gq/projects/str-to-arr/logo.svg"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/str-to-arr"><b>str-to-arr</b></a>
	: Add words from a string to an array
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/str-to-arr"><img src="https://img.shields.io/travis/abranhe/str-to-arr.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/str-to-arr/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/str-to-arr.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/str-to-arr"><img src="https://img.shields.io/npm/v/str-to-arr.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Overview

[str-to-arr](https://www.npmjs.com/package/str-to-arr) extract the words from a string, and store those words in an array. Valid string can only contain **letters** (a, b, c, ...), **numbers** (1, 2, 3, ...), and some special characters (`@, #, $, %, &, ...`). The strings will be replaced by lower case.

### To do

- [ ] accept custom regex property for string validation.

# Install

```
npm install str-to-arr
```

# Usage

```js
const strToArr = require('str-to-arr');

console.log(strToArr('This s$tring has_number3s and hyp-hens'));
// => [ 'this', 's$tring', 'has', 'number3s', 'and', 'hyp-hens' ]
```

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/str-to-arr/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
