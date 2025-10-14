/**
 * Streams are used to read and write data piece by piece without completing whole read or write operation and also without keeping all the data in memory
 * Perfect to handle large data volumes and also efficient in computing
 * This allows video streaming platforms to watch video without fully downloading it at once
 * 
 * 4 Types of Streams
 * Readable Streams, Writable Streams, Duplex Streams and Transform Streams
 * All streams can emit events
 * 
 * Readable: Streams which can be read like http requests or fs read stream
 * There are 2 important events in readable streams, data and end   
 * Data - New piece of Data to read and consume
 * End - No more Data left
 * Functions: pipe() and read()
 * 
 * Writable: Streams which we can write data to
 * Eg: http responses and fs write streams
 * Events: drain and finish
 * Functions: write() and end()
 * 
 * Duplex: Streams that are both readable and writable
 * Like net websocket
 * 
 * Transform Streams are Duplex Streams which transform data as it is written or read
 * zlib ZIP creation
 */

// Task: Read a file which is large and send it to client via http when they hit the server

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res)=>{
    // Method 1: readFile()
    // fs.readFile("./test.txt", "utf-8", (err, data)=>{
    //     if(err) console.log(err.message);
    //     res.end(data)
    // });

    // Method 2: Stream
    // const readableStream = fs.createReadStream("test.txt");
    // const readableStream = fs.createReadStream("test.txt");
    // readableStream.on("data", (chunk)=>{
    //     res.write(chunk);
    // });
    // readableStream.on("end", ()=>{
    //     res.end();
    // });

    // Method 3: Pipe
    const readableStream = fs.createReadStream("test.txt");
    readableStream.pipe(res);

    // FORMAT: readStreamSource.pipe(writeStream)

});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Listening on port 3000...");
});