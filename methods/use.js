const flatten = require('array-flatten');

function use(...arr) {
	const fs = flatten(arr);
	if(fs.length === 0) {
		throw new TypeError('app.use() requires middleware functions');
	}
	if(fs.length === 1) {
		this.stack.push(fs[0]);
		return this;
	}
	fs.forEach(fn => this.stack.push(fn));
	return this;
}

module.exports = use;