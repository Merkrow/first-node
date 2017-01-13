const start = require('../methods/start');
const use = require('../methods/use');

class App {
	constructor() {
		this.stack = [];
	}
}

App.prototype.start = start;
App.prototype.use = use;

module.exports = App;