/**
 * Modules in Node.js
 * 
 * Each JavaScript File is a seperate module
 * Node.js uses commonJS Module System
 * require() module.exports
 * Or import/export in browsers, and this is ES6
 * 
 * require("moduleName")
 * When we require() a module, it is 
 * RESOLVING > WRAPPING > EXECUTION > RETURNING EXPORTS > CACHING
 * Resolved and Loaded: Node tries to look for the module in the core modules, or if it begins with ./ ../ it finds the file in the directories, etc or else it goes to node_modules folder. If not found then it gives error ENOTFOUND
 * 
 * Wrapped: 
 * Module code is wrapped into a function
 * There is a IIFE which gives us the function with params exports, require, module, __filename and __dirname
 * The body {} of the function has the module code
 * Module is private scoped which helps us to write any variable we want without overwriting or overriding the module
 * This doesnt leak variables out to global / foreign files where module is imported
 * Each Module is kept private from the global code
 * 
 * Executed:
 * The IIFE is executed
 * 
 * Return Exports: module.exports = { ... } and the require function returns { ... }
 * Cached: Modules are cached once they are loaded, once we require a module more than once, the result is retrieved from cache 
 */