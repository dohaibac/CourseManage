
const EventEmitter = require("events");
var url = "https://google.com";

class Logger extends EventEmitter {
	log(message) {
		console.log(message);
		this.emit("info", {"message" : message});
	}
}

module.exports = Logger;