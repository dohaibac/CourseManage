
const Logger = require("./logger");
const path = require("path");
const os = require('os');
const fs = require('fs');

var logger = new Logger();
var pathObj = path.parse(__filename);
console.log(pathObj);

console.log(`Free Memory: ${os.freemem()}`);

//const files = fs.readdirSync("/Users/bacdo1");
//console.log(files);

fs.readdir("/Users/bacdo", function(err, files) {
	if (err)
		console.log("Error: ", err);
	else 
		console.log("Result", files);
});	

logger.on("info", (arg) => {
	console.log("Messge Info", arg);
});

logger.log("Hello info");

function sayHello(name) {
	console.log("hello: " + name); 
}

sayHello("Bac");