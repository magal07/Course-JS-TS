


// MODELO 1: 

let num1 = prompt('Digite um número:');
let num2 = prompt('Digte um número:');

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
    alert('Digite apenas números');
} else {
    const soma = num1 + num2;
    alert(`A soma dos números é: ${soma}`);
}

/* MODELO 2:

let num1 = parseFloat(prompt('Digte um número:'));
let num2 = parseFloat(prompt('Digte um número:')); */ 

