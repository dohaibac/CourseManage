
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("MessageLogged", function(){
	console.log("Logged new Messge");
});

emitter.on("NewFile", (arg) => {
	console.log("create a new file", arg);
});

emitter.emit("NewFile", {"file_name" : "demo.txt", 1 : "abc"});