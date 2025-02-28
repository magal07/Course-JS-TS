// tipos de dados primitivos: string, number, indefined, null, boolean, symbol

const nome = 'Marcelo';
const nome1 = "Marcelo";
const nome2 = `Marcelo`; // /\ strings..
const num1 = 10;// number
const num2 = 10.52; //number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico) 
console.log(typeof aprovado, aprovado);
/* valores por referência
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b); */ 

let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b); // b não muda, pois é uma cópia do valor de a