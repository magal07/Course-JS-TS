/*
const name = "Marcelo";
const surname = "Magalhães";

const sayName = () => name + " " + surname;

// module.exports.name = name;
// module.exports.surname = surname;
// module.exports.sayName = sayName;

exports.name = name;
exports.surname = surname;
exports.sayName = sayName;
this.qualquerCoisa = "What do I want to export?";

// console.log(module.exports);
*/

const Module = require("module");

class Persons {
  constructor(name) {
    this.name = name;
  }
}

const name = "Marcelo";
const surname = "Na gaita";

// In this case, I can't use exports {} directly to export
module.exports = {
  name,
  surname,
  Persons,
};

// module.exports.name = "Luiz";
// exports.Persons = Persons; // In key persons of exports contains this class persons
// this.surname = "Anything";
