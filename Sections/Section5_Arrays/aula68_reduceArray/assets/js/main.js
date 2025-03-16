// Reduce: Reduzir o array a um resultado de uma operação matemática 





/* Some all numbers (reduce)
//              0   1  2   3  4  5  6  7  8  9   10   11 12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce(function(acumulator, value, index, array) {
  acumulator += value;
  return acumulator;
}, []); // 0 serve para iniciar o acumulador com o valor 0
console.log(total); // recebeu o valor 236 que é a soma de todos os valores acumulados do array numbers
*/ 
/* Return an array with even numbers (filter)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce(function(acumulator, value) {
  if(value % 2 === 0) acumulator.push(value); // insere o valor no array acumulator (caso seja par)
  return acumulator;
}, []); 
console.log(total); 
*/
/* Return an array with the double numbers (map)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce(function(acumulator, value) {
  acumulator.push(value * 2); // insere o valor no array acumulator (caso seja
  return acumulator;
}, []); 
console.log(total); 
*/
/* Original using reduce
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce(function(acumulator, value) {
  if(value % 2 !== 0) acumulator += value; // soma só valores impares
  return acumulator;
}, 0); // 0 serve para iniciar o acumulador com o valor 0
console.log(total); 
*/


// Return to the oldest person
const people = [
  { name: 'Luiz', age: 62 }, 
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 65 },
  { name: 'Letícia', age: 19 },
  { name: 'Madalena', age: 2025 },
  { name: 'Wallace', age: 47 },
];

const oldestPerson = people.reduce((acumulator, value) => {
  if(acumulator.age > value.age) return acumulator; // se o acumulador for maior que o valor, retorna o acumulador
  return value; // se não, retorna o valor
});

console.log(`Oldest Person:`, oldestPerson);