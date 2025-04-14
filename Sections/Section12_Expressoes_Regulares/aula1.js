
// const regExp1 = /João/g;
// const regExp2 = /João/gi; // 

/* const regExp1 = /joão/g; // busca somente joão
// const regExp1 = /joão/i; // searching João, identify case sensitive
// console.log(regExp1.test(texto)); // true
const regExp1 = /Teve 5 filhos/gi; */
// console.log(regExp1.exec(texto)); // forma um "array" com o resultado 
// console.log(regExp1.exec(texto).input); // busca o input to texto
// console.log(regExp1.exec(texto).index); // busca o index da palavra  

const { texto } = require('./base');

const regExp1 = /(joão|maria|luiz)( cadê tua flauta)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]); // frase completa encontrada
  console.log(found[1]); // grupo 1: maria até "teve"
  console.log(found[2]); // grupo 2: "5 filhos"
} else {
  console.log('Nada encontrado');
}
// g: global (find all matches)
// i: case insensitive
// () : groups
// [] : character class

