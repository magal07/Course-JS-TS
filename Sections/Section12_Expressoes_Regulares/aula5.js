const { alfabeto } = require('./base');

// [] qualquer coisa que colocar entre colchetes, é um conjunto
// [abc] -> a, b ou c
// [a-z] -> qualquer letra de a a z
// [0-9] -> qualquer número de 0 a 9
// [a-zA-Z] -> qualquer letra de a a z ou A a Z
// [a-zA-Z0-9] -> qualquer letra de a a z ou A a Z ou número de 0 a 9
// [^] -> negação, qualquer coisa que não seja o que está entre colchetes
// [-] range, de algo até algo, do menor para o maior [0-9] ou [a-z]
console.log(alfabeto);
// console.log(alfabeto.match(/[abc123]/g)); //[abc] ou [123]
// console.log(alfabeto.match(/[^abc123]/g)); //qualquer coisa que não seja a, b, c, 1, 2 ou 3
// console.log(alfabeto.match(/[^abc123]+/g)); //qualquer coisa que não seja a, b, c, 1, 2 ou 3
// console.log(alfabeto.match(/[0-9]/g)); // qualquer número de 0 a 9
// console.log(alfabeto.match(/[A-Z]/g)); //QLQ letra de A-Z
// console.log(alfabeto.match(/[0-9]+/g)); // separei em 2 grupos na base
// console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); // A a Z ou 0 a 9 maiúsculo ou minúsculo
// console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // ^= tudo menos A a Z ou 0 a 9 maiúsculo ou minúsculo
// console.log(alfabeto.match(/[\u00A0-\u00BA]/g)); // caracteres especiais busquei a ordem na tabela
// console.log(alfabeto.match(/\w+/g)); // tudo que é palavra
// console.log(alfabeto.match(/\W+/g)); // tudo que não é palavra
// console.log(alfabeto.match(/\d+/g)); // só digitos
// console.log(alfabeto.match(/\D+/g)); // tudo menos digitos
console.log(alfabeto.match(/\s+/g)); // ESPAÇOS
console.log(alfabeto.match(/\S+/g)); // tudo menos espaços