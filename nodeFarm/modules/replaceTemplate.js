const replaceTemplate = (html, element)=>{
    // The logic here is to read the card element and use regex to replace all dynamic parts
    // Then use a let variable to replace and update it simultaneously
    // usage of let is very important here
    let output = html.replace(/{%PRODUCTNAME%}/g, element.productName);
    output = output.replace(/{%IMAGE%}/g, element.image);
    output = output.replace(/{%ORGANIC%}/g, element.organic ? "ORGANIC":"NOT ORGANIC");
    output = output.replace(/{%QUANTITY%}/g, element.quantity);
    output = output.replace(/{%NUTRIENTS%}/g, element.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, element.description);
    output = output.replace(/{%PRICE%}/g, element.price);
    output = output.replace(/{%FROM%}/g, element.from);
    output = output.replace(/{%ID%}/g, element.id);
    return output;
} 

module.exports = { replaceTemplate }