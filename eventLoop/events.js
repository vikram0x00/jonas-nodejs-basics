const EventEmitter = require("events");
const http = require('http');

const server = http.createServer();

class Sales extends EventEmitter{
    constructor(){
        super();
        // Get access to all methods of EventEmitter
    }
}

const emitter = new Sales();

emitter.on("newSale", ()=>{
    console.log("New Sale Detected");
});

emitter.on("newSale", (itemId)=>{
    console.log(`Item with ID ${itemId} was sold!`);
});

emitter.on("newSale", (item)=>{
    console.table(item);
});

emitter.emit("newSale");
emitter.emit("newSale", 10);
emitter.emit("newSale", {name: "Lenovo", "price": 300});

server.on('request', (req, res)=>{
    res.end("Hello World!");
});

server.listen(4000, '127.0.0.1', ()=>{
    console.log("Listening on port 4000...");
});

/* 
 * The Event Driven Architecture
 * All modules in Node.js are built around event driven architecture
 * Event Emitter emits Events, and a Listener which looks for events and executes associated Callbacks 
 * We can also send something to the emitter by passing it with .emit(eventName, something) 
 * And it can be obtained in the callback parameters
 * A single event can have multiple emits and listeners
*/
