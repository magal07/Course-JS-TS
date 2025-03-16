// // Map: returns a new array with the same length as the original array, but with the values transformed.

// // double the numbers
// //                0   1  2   3  4  5  6  7  8  9   10   11 12
// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const doubleNumbers = numbers.map(value => value * 2);
// console.log(doubleNumbers);


// return only name
// remove just key id in each object
// add one key id in each object

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

// one exercise
const peopleName = people.map(obj => obj.name);
const removeName = people.map(obj => ({age: obj.age})); // reveja o detalhe da refatoraçõ do código neste exemplo {age: obj.age} 
const id = people.map(function(obj, index) {
  const newObject = {...obj}; // criando um novo objeto, não alteramos o valor do objeto original
  newObject.id = (index + 1000);;
  return newObject;
});
console.log(people); // leia a linha 27
console.log(id);