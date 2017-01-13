const App = require('./class/App');

const app = new App();

app.use((req, res) => {
	console.log(req.headers);
	res.end("Hello World");
}, (req, res) => {
	console.log(req.headers);
	res.end("Hello World");
})


app.start();