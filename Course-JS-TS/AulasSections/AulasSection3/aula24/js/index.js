/* 

Valores falsos: 0, '', "", ``, null, undefined, NaN, false.

*/

// console.log('Luiz' && 'Maria'); // No campo Luiz tem preenchimento entre as aspas simples, o que o torna verdadeiro, porém o JS vai trazer o resultado 'Maria' no console.
// console.log('Luiz' && '' && 'Maria');

// // function falaOi() {
// //     return 'Oi';
// // }

// // let vaiExecutar = 'Joãozinho ';

// // console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz' || true); // or precisa apenas de 1 expressão verdadeira pra retornar verdadeiro

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
