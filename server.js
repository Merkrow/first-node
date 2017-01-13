const http = require('http');
const flatten = require('array-flatten');


class App {
	constructor() {
		this.stack = [];
	}
	start() {
		http.createServer((req, res) => {
			this.stack.forEach(fn => fn(req, res));
		}).listen(8080);
		return this;
	}
	use(...arr) {
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
}

const app = new App();

app.use( (req, res) => {
	console.log(req.headers);
	res.end("Hello World");
})

app.start();