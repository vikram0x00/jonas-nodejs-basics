const fs = require('fs');
const http = require('http');
const URL = require('url');

// const products = fs.readFileSync("./json/data.json", "utf-8");
const products = fs.readFileSync(`${__dirname}/json/data.json`, "utf-8");
const productData = JSON.parse(products);

// Create a HTTP Server
const server = http.createServer((req, res)=>{
    if(req.url == "/home"){
        res.end("Home", {"Content-Type":"text/html"});
    }
    else if(req.url == "/overview"){
        res.end("Overview");
    }
    else if(req.url == "/product"){
        res.end("Product");
    }
    else if(req.url == "/api"){
        console.log(typeof productData);
        console.log(typeof products);
        /* Reading file everytime the api endpoint is hit consumes a lot of computing power overtime,
        instead use readFileSync at the top level so that it reads only once and keeps the value stored in a variable */
        res.writeHead(200, {"content-type": "application/json"});
        res.end(products);
    }
    else{
        // res.writeHead writes status code 404 and an object which is response headers
        res.writeHead(404, {"custom-error": "not-found"});
        res.end("<h1>404 Page Not Found.</h1>");
    }
});

// res.end is used to send the request as a text by default, also it can be supplied with HTML to get HTML response, like above

/* 
req object has a lot of keys, and req.headers give the important info about the request and req.body gives the data inside the request if it exists
req.url gives the url like - http://hostname:port/path
req.url = path 
*/

// Starting the HTTP Server
// server.listen(port, hostname, callback)
// Callback runs as soon as the server starts
server.listen(3000, '127.0.0.1', ()=>{
    console.log("HTTP Server is running at port 3000");
});