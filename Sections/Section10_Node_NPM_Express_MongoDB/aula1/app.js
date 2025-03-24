/* Examples : 
// const mod1 = require("./mode1"); // importando module completed
// const sayName = require("./mode1").sayName; // importando only function sayname();
// const sayName2 = mod1.sayName; // IMPORT sayName of mod1
// console.log(sayName());
// console.log(sayName2()); 

// Destructions

// import with destruction's
const { name, surname, sayName } = require("./mode1");
console.log(name, surname);
console.log(sayName()); */

const path = require("path");
const axios = require("axios");
const mod1 = require("./mode1");
const { Persons } = require("./mode1");

//API
// axios("https://pokeapi.co/api/v2/pokemon?limit=10")
//   .then((response) => console.log(response.data))
//   .catch((e) => console.log(e));

const p1 = new Persons("Jão");
console.log(p1);
