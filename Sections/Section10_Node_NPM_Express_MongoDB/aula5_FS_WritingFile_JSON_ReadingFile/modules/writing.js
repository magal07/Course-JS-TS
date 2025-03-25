// Importing the 'fs' module from Node.js, using its promise-based API for asynchronous file operations
const fs = require('fs').promises;

// Exporting a function as a module that reads the contents of a file
// - 'path' is the file path that will be read
// - The 'utf-8' encoding ensures the file content is returned as a readable string, instead of raw bytes
module.exports = (path) => fs.readFile(path, 'utf-8'); 