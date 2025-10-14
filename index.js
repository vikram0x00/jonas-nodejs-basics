console.log("Hello World!");

// Import fs module
const fs = require('fs');

// Synchronous File Reading [Blocking Way]
// Blocks the print of the Reading file..., the reading file thing is printed after the fs.readfilesync
const textContent = fs.readFileSync("./file.txt", "utf-8");
console.log(textContent);
console.log("Reading file...");
// If we dont specify the encoding, we get a Buffer

// Output: JAI HIND!

const newText = `JAI HIND\n\nWRITTEN BY JAVASCRIPT\n${Date.now()}`
fs.writeFileSync('./output.txt', newText);
console.log("File written to ./output.txt");

// Asynchronous File Reading [Non Blocking]
fs.readFile("./output.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(`Error: ${error.message}`);
    }
    else{
        console.log(data);
    }
});
console.log("Reading file.txt...");

/*
 When node index.js is done in the terminal, 
 fs.readFile is pushed to the background, 
 and then the console.log runs before it, 
 then the read is completed, the output is printed out.

 Order
 [1] console.log
 [2] fs.readFile
*/

// Asynchronous File Writing and reading
fs.readFile("./txt/start.txt", "utf-8", (err, data)=>{
    if(err) return console.log("Error: " + err.message)
    console.log("2 Data: " + data);
    fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2)=>{
        console.log(`3 ${data2}`);
        fs.readFile("./txt/append.txt", "utf-8", (err, data3)=>{
            console.log("4" + data3);
            fs.writeFile("./txt/final.txt", `${data2}\n\n${data3}`, "utf-8", err=>{
                if(err){
                    console.log(err.message);
                }
                else{
                    console.log("5 File write completed!")
                }
            });
        });
    });
});
console.log("1 Reading ./txt/start.txt");

// CALLBACK HELL LOL