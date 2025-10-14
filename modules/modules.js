// Gives the whole module, filename, dirname, exports etc
// console.log(arguments);
// (function(exports, require, module, __filename, __dirname){})();

const calculator = {
    add: (a, b)=>{return a+b},
    sub: (a, b)=>{return a-b},
    multiply: (a, b)=>{return a*b},
}

module.exports = calculator;

// Exports is an object
// We can also do module.exports = { add: (a, b)=>{return a+b}, sub: (a, b)=>{return a-b}, multiply: (a, b)=>{return a*b} };

/*
exports.add = () => { return a+b };
exports.multiply = () => { return a*b }; 
*/

// Caching is the process of storing module code in memory and retrieving it again 
