//PADRÃO DE CONTAS: IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // 1.1

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
// num1 = Number(num1.toFixed(2)); // arredondando para 2 casas decimais
console.log(num1);
console.log(Number.isInteger(num1));  // verificando se é inteiro

// console.log(num1.toString() + num2); tornando num1 string temporária
// num1 = num1.toString(); // convertendo para string
// console.log(num1.toString(2)); // convertendo para binário
// console.log(num1.toFixed(2)); // arredondando para 2 casas decimais como se fosse o CultureInfo do C#
// console.log(Number.isInteger(num1)); // verificando se é inteiro
// let temp = num1 * 'Ola';
// console.log(Number.isNaN(temp)); // verificando se é NaN (retorna um bool)



