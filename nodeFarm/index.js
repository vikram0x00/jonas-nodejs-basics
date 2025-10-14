// Project Summary

// Overview page showing all products and basic details, dynamic from data.json
// Product Page shows all the info of a specific product

// Import Modules
const fs = require('fs');
const http = require('http');
const URL = require('url');
const port = 4000;

// Import Custom replaceTemplate Module
const { replaceTemplate } = require('./modules/replaceTemplate');

// Read HTML Files
const overviewPage = fs.readFileSync('./templates/template-overview.html', 'utf-8');
const productTemplate = fs.readFileSync('./templates/template-product.html', 'utf-8');
const cardTemplate = fs.readFileSync('./templates/template-card.html', 'utf-8');
const errorTemplate = fs.readFileSync('./templates/template-error.html', 'utf-8');

// replaceTemplate() was written here but for modules it is in modules folder

// Read Data from File
const products = fs.readFileSync(`${__dirname}/json/data.json`, "utf-8");
const productData = JSON.parse(products);

// Create a HTTP Server
const server = http.createServer((req, res)=>{
    // Parsing Parameters from URL via URL Module
    const { pathname, query } = URL.parse(req.url, true);
    
    if(pathname == "/" || pathname == "/overview"){
        const cardsHTML = productData.map(element => replaceTemplate(cardTemplate, element));
        let finalRender = overviewPage.replace(/{%CARDS%}/, cardsHTML.join("").toString())
        res.writeHead(200, {"content-type": "text/html"});
        res.end(finalRender);
    }
    else if(pathname == "/product"){
        const id = Number.parseInt(query.id);
        try {
            const selectedProduct = productData[id];
            const finalRender = replaceTemplate(productTemplate, selectedProduct);
            res.writeHead(200, {"content-type": "text/html"});
            res.end(finalRender);
        } catch (error) {
            res.writeHead(404, {"content-type": "text/html"});
            res.end(errorTemplate);
        }
        // Try catch syntax and error page not in original tutorial, but just added myself
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end(errorTemplate);
    }
});
server.listen(port, '127.0.0.1', ()=>{
    console.log("HTTP Server is running at port " + port);
});