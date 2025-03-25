// Importing the 'path' module to work with file and directory paths
const path = require('path');

// Resolving the absolute path to the 'teste.json' file in the current directory
const fileWalk = path.resolve(__dirname, 'teste.json');

// Importing custom modules for reading and writing files
const reading = require('./modules/reading');
const writing = require('./modules/writing');

// A commented-out block defining an array of person objects (sample data)
// const persons = [
//   { name: 'John' },
//   { name: 'Anthony' },
//   { name: 'Calton' },
//   { name: 'Jessy' },
//   { name: 'Mary' },
// ];

// A commented-out block that converts the 'persons' array into a JSON string
// with indentation (2 spaces) and then writes it to the 'teste.json' file
// const json = JSON.stringify(persons, '', 2); // create string which contains persons
// reading(fileWalk, json); // Writing the JSON data to the file using the 'reading' module

// Asynchronous function to write data to a file
async function writingFile(path) {
  // Waits for the 'writing' function to process the file and returns data
  const data = await writing(path);

  // Calls the 'renderizaData' function to process and display the data
  renderizaData(data);
}

// Function to process and display data from the file
function renderizaData(data) {
  // Parses the JSON data (string format) into a JavaScript object
  data = JSON.parse(data);

  // Iterates through each object in the parsed data and logs it to the console
  data.forEach(value => console.log(value));
}

// Calls the 'writingFile' function with the path to 'teste.json' to begin execution
writingFile(fileWalk);