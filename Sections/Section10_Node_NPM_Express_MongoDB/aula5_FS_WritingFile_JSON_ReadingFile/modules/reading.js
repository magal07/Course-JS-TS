// Importing the 'fs' module from Node.js, using its promise-based API for asynchronous file operations
const fs = require('fs').promises;

// Exporting a function as a module to write data to a specified file
// - 'path' is the file path where data will be written
// - 'data' is the content to write to the file
module.exports = (path, data) => {
  // Using the 'fs.writeFile' method to write the data to the file
  // The { flag: 'w' } option specifies that the file's content will be replaced if it already exists
  fs.writeFile(path, data, { flag: 'w' });
};

// An example usage of 'fs.writeFile', which is commented out:
// fs.writeFile(fileWalk, 'Frase1\n', { flag: 'a' }); 
// - 'flag: w': Replaces all existing content in the file
// - 'flag: a': Appends new content to the existing file