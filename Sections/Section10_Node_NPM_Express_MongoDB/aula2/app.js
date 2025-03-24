// /* const multiplier = require("./mod");
// // const n = require("./mod");

// // console.log(n);

// // const Dog = require("./B/C/D/mod");
// const Dog = require("./Z/mod2");
// const doguinho = new Dog("Scooby Doo");
// doguinho.latir();

// /// Entre folder -> ./
// /// Exit folder <- ../
// */

// const path = require("path");
// console.log(__dirname);
// console.log("------------");
// console.log(path.resolve(__dirname, "../../../../../Usuários/Marcelo/Imagens"));

// // console.log(__filename); searching file name
// // console.log("------------");
// // console.log(__dirname); searching absolute diretory

const Dog = require("./Z/mod2.js");

const c1 = new Dog("Doguinho");
c1.latir();
