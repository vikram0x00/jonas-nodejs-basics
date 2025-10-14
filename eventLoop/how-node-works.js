// Node.js Architecture
// Node runs on two dependencies called V8 and libuv
// V8 Engine converts JavaScript to Machine Code
// libuv gives access to i/o model, networking, asynchrounous code execution and thread pool event loop etc.,
// Event Loop is responsible for callbacks, thread pool is for more power requiring tasks like file reading
// libuv is written in C++ and also V8 is in C++
// Event Loop and Thread Pool are responsible for execution of Node.js Applications
// Node.js is a mixture of all these but in JavaScript
// 
// When Node.js is run on a machine, a node process is running on the machine
// It will start a process on the machine
// Thread is a sequence of Instructions i.e Code
// Node runs in single thread, and blocks the thread if synchronous code is written
// 
// Process Order
// 1. Initialize Program
// 2. Executes Top Level Code
// 3. Requires Modules
// 4. Register event Callbacks
// 5. Start the Event loop
// 
// Thread Pool is the background, it provides 4 extra threads can be extended to 128 threads
// Offloading == Removing load from the main thread and transferring it to the thread pool
// The Event loop can then transfer the heavy load to the thread pool, this is called offloading 
// The thread pool can handle File System API, Cryptography, DNS lookups and compression
// 
// The Event Loop
// 
// NodeJS is built on an event driven architecture
// If something happens, like a http request or if a file is finished reading, the callbacks emit events, and they are picked up by the event loop
// The Callbacks associated to them are executed by the runtime
// The power consuming tasks are offloaded to the thread pool
//
// REPL - Read Code, Evaluate Code, Print Execute Code, Loop Check for more code
// The apps in PHP or Apache use a new thread for a new client
// 
// The Event Loop Order of Events
// 1. Expired Timer Callbacks
// The event loop of Node checks for expired timer callbacks first, that is setTimeout function callbacks, if there are expired timers, callbacks associated with them are executed
// If there are no timeouts, the Event Loop moves on to find
// 2. IO Polling and Callbacks
// In this stage, if some http Request occurs or a file is finished reading, the callback associated to them are called, this is IO Polling Callbacks
// 3. setImmediate callbacks
// setImmediate are a type of time related functions which are executed after timeouts and IO polling events
// If code contains setTimeout at 0ms and setImmediate, setTimeout will run before setImmediate
// 4. Close callbacks
// These are the callbacks associated with close functions like Webserver or Websocket shutdown
// After close callbacks are executed
// 
// The timer expired events from the setTimeout are first picked up by the Event Loop until no more timer expired callbacks are present
// File reading and IO polling callbacks are processed next
// SetImmediate are the special callbacks which can be called after IO Polling
// Close Callbacks, when websocket shuts down, and then it looks for other IO callbacks, if they exist, the Expired Time callbacks are run again and the loop continues
// Else the program process is exited 
// How not to block code in Asynchronous Node programming
// 
// Dont use sync versions of fs, crypto or zlib in some API endpoint case
// Unless top level single use which doesn't block
// Dont perform complex calculations
// Do not parse or stringify JSON at large quantities
// Dont use too complex REGEX
// Use promises to offload the tasks into the thread pool
