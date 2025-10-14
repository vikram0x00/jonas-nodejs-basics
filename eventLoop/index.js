const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() =>  console.log("Timer 1 finished"), 0);
setImmediate(()=> console.log("setImmediate 1 Finished"));

fs.readFile("./text.txt", "utf-8", (err, data)=>{
    if(err) console.log(err.message);
    else console.log(data); 

    setTimeout(() =>  console.log("Timer 2 finished"), 0);
    setTimeout(()=> console.log("Timer 3 Finished"), 3000);
    setImmediate(()=> console.log("setImmediate 2 Finished"));

    process.nextTick(()=> console.log("process.nextTick"));

    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", ()=> console.log(`Completed in ${(Date.now() - start)/1000} seconds`));
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", ()=> console.log(`Completed in ${(Date.now() - start)/1000} seconds`));
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", ()=> console.log(`Completed in ${(Date.now() - start)/1000} seconds`));
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", ()=> console.log(`Completed in ${(Date.now() - start)/1000} seconds`));
});

console.log("Hello From Top Level Code");

/**
 * Node.js init program, requires modules, executes top level code, then starts the event loop
 * In the Event loop it looks for Expired Timers, IO Callbacks, then setImmediate Callbacks and then close callbacks
 * So the console.log Hello from top level is executed right after doing node index.js
 * then setTimeout, then setImmediate and then the value of the file is logged out
 * Between the event loop phases, there are queued microtasks which are executed, process.nextTick is one of them
 * This runs before all the setImmediate and setTimeout above 
 * 
 * crypto.pbdfk2 is a function which is used to hash a password 
 * This is automatically offloaded to the thread pool
 * process.env.UV_THREADPOOL_SIZE can be used to increase or decrease the threads in the thread pool
 * 
 */