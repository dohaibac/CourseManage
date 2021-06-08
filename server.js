const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.write("Hello Word");
		res.end();
	}

	if (req.url == "/api") {
		res.write("Welcome to API");
		res.end();
	}
});

server.listen(3000);

console.log("Listing on port 3000 ... ");