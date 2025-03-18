// const objA = { 
//   keyA: 'A'
// };


// const objB = { 
//   keyB: 'B'
// };

// const objC = new Object(); 
//   objC.keyC = 'C';

// Object.setPrototypeOf(objB, objA); // CONFIGURANDO O PROTOTYPE B PARA SETAR O A
// Object.setPrototypeOf(objC, objB); // CONFIGURANDO O PROTOTYPE C PARA SETAR O B Q TEM O A DENTRO DA SUA CADEIA
// console.log(objC.keyA);

function Product(name, price){
  this.name = name;
  this.price = price;
}

// coloque os métodos fora da função construtora 
Product.prototype.descount = function(percentual) {
  this.price = this.price - (this.price * (percentual / 100));
};

Product.prototype.increase = function(percentual) {
  this.price = this.price + (this.price * (percentual / 100));
};

const p1 = new Product('Camiseta', 50);
// p1.descount(100);
// p1.increase(100);
console.log(p1);

//literal buscando e se alimentando da função construtora Product
const p2 = {
  name: 'Mug',
  price: 15
}
Object.setPrototypeOf(p2, Product.prototype); // <-- aqui é a busca da linha 36
p2.increase(10);
console.log(p2);

// criando 1 obj e já setando o prototype

// const p3 = Object.create(Product.prototype);
const p3 = Object.create(Product.prototype, {
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});
p3.increase(10);
console.log(p3);