// Return to sum of double of all pairs
// Filter pairs: [ 50, 80, 2, 8, 22 ]
// Double of values: [ 100, 160, 4, 16, 44 ]
// Reduce (sum all): 324

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numbersEdited = numbers
      .filter(value => value % 2 === 0)
      .map(value => value *2)
      .reduce((accumulator, value) => accumulator + value);
      
console.log(numbersEdited);

// result to sum of double of all pairs (100 + 160 + 4 + 16 + 44): 324  