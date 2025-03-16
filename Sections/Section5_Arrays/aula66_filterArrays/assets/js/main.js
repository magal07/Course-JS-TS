// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos
// Filter - Filtrar elementos de um array
// Map - Modificar elementos de um array
// Reduce - Reduzir um array a um resultado de uma operação matemática

// Return the numbers bigger than 10 
// filtragem completa para entendimento dos parametros
// const numbersFiltered = numbers.filter((value, index, array) => {
//   console.log(value, index, array);
//   return (value > 10)});  

//               0   1  2   3  4  5  6  7  8  9   10   11 12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// função de callback refatorada para arrow function                    
const numbersFiltered = numbers.filter(value => value > 10);  
console.log(numbersFiltered);





// Return the people who have more than 5 letters in their names
// Return the people who have bigger of 50 years
// Return the people who have the last letter of their names equal to 'a'

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

// 5 letters
const peopleName5Letter = people.filter(obj => obj.name.length >= 5);
console.log(peopleName5Letter);

// 50 years

const peopleAge50 = people.filter(obj => obj.age > 50);
console.log(peopleAge50);

// tolowerCase: convert to uppercase | endsWith: Checking if it end whit 'a'
const peopleLastLetterA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(peopleLastLetterA);