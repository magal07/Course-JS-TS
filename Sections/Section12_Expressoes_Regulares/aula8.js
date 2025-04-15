const { lookahead } = require('./base');

console.log(lookahead);

// console.log(lookahead.match(/.+[^in]active$/gim));
// POSITIVE LOOKAHEAD (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim)); // frase completa sem a palavra Active

// POSITIVE LOOKAHEAD (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim)); 

// NEGATIVE LOOKAHEAD (frases que não tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// POSITIVE LOOKBEHIND (frases q tem online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// NEGATIVE LOOKBEHIND (frases q NÃO COMEÇAM COM ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));


const cpf = `
012.250.796-10
111.111.111-11
555.555.555-55
148.125.796-10
`;

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}.\d{3}.\d{3}\-\d{2}$/gm));


