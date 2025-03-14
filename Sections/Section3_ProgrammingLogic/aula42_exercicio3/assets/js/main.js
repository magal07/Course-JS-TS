
/* minha forma de resolver
const fizz = (number) => {
  if(number < 0 || number > 100) {
    return 'Número fora do intervalo permitido (0-100)';
  }
    return number % 3 === 0 ? 'Fizz' : number;
}

const buzz = (number) => {
 if(number < 0 || number > 100) {
    return 'Número fora do intervalo permitido (0-100)';
 }
  return number % 5 === 0 ? 'Buzz' : number;
}

const fizzBuzz = (number) => { 
    if(number < 0 || number > 100) {
     return 'Número fora do intervalo permitido (0-100)';   
    }
    return number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz' : number; 
}

for (let i = 0; i <= 100; i++) {
console.log(`Exemplo 1: ${fizz(i)}`); // true
console.log(`Exemplo 2: ${buzz(i)}`); // false = return number
console.log(`Exemplo 3: ${fizzBuzz(i)}`); // true;
} */
 

// forma do professor: 

function fizzBuzz(numero){
    if (typeof numero !== 'number') return NaN; // verificando se o tipo é diferente de número
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++){ 
    console.log(i, fizzBuzz(i));
}


