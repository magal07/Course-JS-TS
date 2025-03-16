// utilização do foreach para percorrer um array
// o mais recomendado é o for of ou o reduce, neste caso.
const a1 = [10, 20, 30];

// for(let value of a1){ 
//   console.log(value);
// }

let total = 0;
a1.forEach(value => {
total += value;
});
console.log(total);