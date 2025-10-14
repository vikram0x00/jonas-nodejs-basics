// Node.js, Express, MongoDB Bootcamp - Jonas @ Udemy

// ABOUT NODE.JS    
// Node.js is built on V8 JavaScript Engine of Google, JavaScript Runtime
// In vanilla JS, browser runs all the JS Code, and here browser is the runtime. Any frontend framework like React, Angular also executed here
// Node.js runs out of the browser, its a standalone environment
// Access to Filesystem, networking are the factors which make Node.js the perfect environment to build a Web Server
// Build fast, highly scalable network applications in the backend

// Node.js is a single threaded, event driven [REPL], non-blocking IO model. Lightweight on server, and efficient
// Node.js isn't recommended for heavy server side processing, although in the recent update it supports AI Image Generation Float16Array
// Node.js allows us to create an entire web application from start to end in a single language
// Huge open source library of modules https://npmjs.org/ which are free and also allow us to do almost anything with JavaScript
// 
// * NodeJS doesn't use threading, but runs on a single thread and uses Event loop mechanism to schedule the order of the functions or code written in the program
// * REPL - Read Evaluate Print Loop
// * Tab - Gives the global variables of Node.js 
// * _ can be used to access the result of previous function
// * Consider 3+3, _+4 gives 10 as the output
// * If we want all methods of an object in Node.js, we can use something like objectName. + Tab in the CLI to list all the methods of that JS Object
// * To clear console use console.clear() and to exit use .exit or Ctrl + D

// Node.js Modules
// In total there are 3 types of modules, inbuilt modules like fs, http, crypto. Custom modules which are js files and External modules which are installed by npm install
// Some modules are inbuilt like fs, http, crypto and all, and also we can install modules by doing npm install -- later

// Asynchronous and Synchronous Code in Node.js
// Synchronous code is called Blocking Code because each line of code is given priority, the REPL waits until some code block is executed and moves on to another
// Blocks the execution of the rest of the code
// Asynchronous code doesn't stop the execution of the rest of the code, but instead it runs in the background and it notifies you when it is done and the error / data is handled by the callback function
// Immediately moves to next function
// Single threaded architecture, this is where code is executed
// Consider a webserver, with millions of requests per second and synchronous code will stop for one user and then move onto another 
// This is because all the requests are running / executed by a single thread
// Refer: Lec 9 4:21
// Asynchronous functions allow a server to serve a lot of clients a second
// Callbacks != Asychronous
// Asynchronous functions use callbacks. Callbacks need not to be Asynchronous
// 
// NPM
// It is a package management tool for Node.js Projects, node package manager. It can be used to install uninstall modify a package which is used in the project
// For initializing an Node Project we do `npm init`
// If we want all the values to be default, we do `npm init -y`
// This creates a package.json file which contains some information about the Project
// To install a package from the npmjs library, we do `npm install {packagename}`
// Also `npm i slugify` is accepted. 
// As soon as the package is installed, the package.json is updated with a key named dependencies which has the package names and versions.
// This is used in later reinstalling the packages in a server environment
// See ./code/nodeFarm/package.json
// These are server dependencies or regular dependencies, meaning they will be used in the production environment and will be necessary to run the web server as expected
// Dev Dependencies are the dependencies which are used only in the time of development
// Eg: Nodemon
// `npm i nodemon --save-dev`
// Global Install of Node Packages
// `npm i -g nodemon` Available in every folder possible on the device
// The scripts field in the package.json can be used to define some script example start, and then run it using npm start
// "scripts": { "start": "node index.js" }
// Usage: `npm run start`
// 
// Using an External Module in index.js
// `const module = require('module');`
// ES6: `import module from 'module';`
// 
// Package Versioning
// The node package follows semantic versioning, also each of them are of the format {MAJOR}.{MINOR}.{PATCH}
// If the developers find a bug, they do PATCH+=1
// When the major changes, the syntax may no longer be correct
// ^ Symbol shows that the server environment accepts minor patches and changes
// To install a specific version of the package we use `npm install packagename@1.2.4`
// To install the latest version of the package we do `npm install package@latest`
// Use `npm outdated` in the CLI, to get outdated packages list.
// ~ Symbol in front of the version shows that updating the packages only accept patches, nothing else
// To update a package we do `npm update packagename`
// If the version symbol is set to ^, the package gets updated to latest. If ~ package updates to Wanted level only
// The version symbol * accepts all changes minor / major / patch if mass updated
// 
// How a website works
// When a client i.e browser requests on a site like https://google.com/maps then, http is the protocol, google.com is the server address and maps is the resource
// Google.com isnt the server address but a domain, which is easy to remember and keep in mind. 
// DNS Domain Name Server is a software which is like an index of the domain names and server addresses
// DNS Lookup occurs when a client requests, even before the response from the Googles server
// Then it redirects to https://234.32.234.44:443
// 80: HTTP, 443: HTTPS
// Then a TCP/IP Connection is set up between the browser and the server, which is a websocket connection, keep-alive in the headers mean this TCP IP
// TCP = Transfer Control Protocol, IP = Internet Protocol
// HTTP = Hyper Text Transfer Protocol
// 
// The Request Message looks something like this...
// GET /maps HTTP/1.1
// 
// Headers <req.headers>
// Host: www.google.com
// User-Agent: Mozilla/5.0
// Accept-Language: en-US
// 
// <req.body>
// 
// Format: {HTTP_METHOD} {RESOURCE} {HTTP_VERSION}
// https is a secured protocol with TLS/SSL encryption
// http requests can be intercepted
// 
// The Response Message looks something like this...
// HTTP/1.1 200 OK
// Format: {HTTP_VERSION} {STATUS CODE} {STATUS MESSAGE}
// 
// Headers <res.headers>
// Host: www.google.com
// User-Agent: Mozilla/5.0
// Accept-Language: en-US
// 
// <res.body> HTML / JSON / TEXT
// 
// There are lots and lots of requests in a website, but when the index.html is obtained, it is looked up for assets in the head or script and then they are loaded from the server too
// The info is sent in chunks in the TCP model and assembled in the server
// 
// 
// 
// 
// 
// 