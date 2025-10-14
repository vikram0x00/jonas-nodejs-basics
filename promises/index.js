const fs = require('fs');
const superagent = require('superagent'); // Axios

const readFilePromise = (filePath)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, "utf-8", (err, data)=>{
            if(err){
                reject("This file was not found at the specified file path.");
            }
            else{
                resolve(data);
            }
        });
    });
}

const writeFilePromise = (writePath, fileData)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile(writePath, fileData, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve("File has been written to the specified path.")
            }
        });
    });
}

// fs.readFile('./dog.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
        // this also returns promise
        // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res)=>{
        //     if(err){
        //         return console.log(err.message);
        //     }
        //     else{
        //         console.log(res.body);
        //         fs.writeFile("./dog-image.txt", res.body.message, err=>{
        //             if(err) console.log(err.message);
        //         });
        //     }
        // });

        // using promises
        // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(response=>{
        //     console.log(response.body);
        //     fs.writeFile("./dog-image.txt", response.body.message, err=>{
        //             if(err) console.log(err.message);
        //     });
        // }).catch(err=>{
        //     console.log(err);
        // });
    // }
// });

// Callback Hell ^^

// Solving Callback Hell

// readFilePromise("./dog.txt").then(data=>{
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// }).then((res)=>{
//     console.log(res.body);
//     writeFilePromise("./dog-image.txt", res.body.message).then(response=>{
//         console.log(response);
//     });
// }).catch(err=>{
//     console.log(`Error: ${err}`);
// });

// This above code is shorter and also works as usual without callback hell

// async await

const fetchDogImage = async ()=>{
    try {
        const data = await readFilePromise("./dog.txt");
        console.log(data);
        const image = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(image.body);
        const statusWrite = await writeFilePromise("./dog-image.txt", image.body.message);
        console.log(statusWrite);
    }
    catch(err){
        console.log(err);
        throw err;
    }
    return "COMPLETED";
}

// Async functions return promises automatically

// console.log("Getting images...");
// fetchDogImage().then(message=>{
//     console.log(message);
//     console.log("COMPLETED 2");
// }).catch(err=>{
//     console.log(`Line 102: ${err}`);
// });

// While using async await syntax and if error handling is also done in trycatch, to access error variable we need to throw err 

// IIFE

// ( async ()=>{
//     try {
//         console.log("1 Getting dog pics...");
//         const message = await fetchDogImage();
//         console.log(message);
//         console.log("3 Done getting dog pics...");
//     } catch (error) {
//         console.log(error)
//     }
// })();

// Manage multiple promises
const getManyDogPics = async ()=>{
    try {
        const data = await readFilePromise("./dog.txt");
        console.log(data);
        const image1 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const image2 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const image3 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const imgBodyArray = await Promise.all([image1, image2, image3]);
        const imageArray = imgBodyArray.map(element => element.body.message);
        const statusWrite = await writeFilePromise("./dog-image.txt", imageArray.join("\n").toString());
        console.log(statusWrite);
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

getManyDogPics()