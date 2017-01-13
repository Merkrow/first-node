const http = require('http');
const config = require('../config');


function start() {
	http.createServer((req, res) => {
		if(this.stack.length > 0) {
			this.stack.forEach(fn => fn(req, res));
		}
	}).listen(config.port);
	return this;
}

module.exports = start;