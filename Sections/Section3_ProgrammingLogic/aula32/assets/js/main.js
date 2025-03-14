/* relembrando desestruturação
let a = 'A';
let b = 'B';
let c = 'C';

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;

console.log(a, b, c); */ 
/* ... <- rest ou spread <- operator 
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros; // utilizando -> ... para informar uma variável que buscará as demais arrays
console.log(um, tres, cinco);
console.log();

*/ 
/* Exemplo 1 mais utilizado
const numeros = 
 //      0          1          2
 //   0  1  2    0  1  2    0  1  2
    [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];

    console.log(numeros[1][2]);

*/ 
/* Exemplo 2  

const numeros = 
 //      0          1          2
 //   0  1  2    0  1  2    0  1  2
    [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros;
console.log(seis); */
 
/* Exemplo 3 */ 

const numeros = 
 //      0          1          2
 //   0  1  2    0  1  2    0  1  2
    [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
 