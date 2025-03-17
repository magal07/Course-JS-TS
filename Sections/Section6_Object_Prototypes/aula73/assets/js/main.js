/*
Object.values
Object.entries 
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

* We already saw (já vimos)
* - Object.keys (return keys)
* - Object.freeze (freeze the object)
* - Object.defineProperties(define several properties)
* - Object.defineProperty (define one property)*
*/ 
/*

product.name = 'Other name';
// const mug = Object.assign({}, product, { material: 'porcelain'}) // Object assing: é um ...spread, copia o product para dentro de mug
const mug = {name: product.name, price: product.price}; // buscar somente 1 propriedade 
// mug.name = 'Caneca';
// mug.price = '2.5';

// console.log(product);
// console.log(mug);

*/ 
/*
* const product = {name: 'Product', price: 1.8};
Object.defineProperty(product, 'name', {
  writable: false,
  configurable: false,
  value: 'Anything else'
  
});
console.log(Object.getOwnPropertyDescriptor(product, 'name'));
// product.price = 'Another thing';
// delete product.price;
console.log(product);
*/

const product = {name: 'Product', price: 1.8, material: 'porcelain'};
console.log(Object.keys(product)); // search the key ['name', 'price]
console.log(Object.values(product)); // search the value ['Product', 1.8]
console.log(Object.entries(product)); // search with form of array, 2 arrays  [ [ 'name', 'Product' ], [ 'price', 1.8 ] ]

// for(let value of Object.entries(product)){
//  console.log(value[0], value[1]);
for(let [key, value] of Object.entries(product)){
  console.log(key, value);
}
