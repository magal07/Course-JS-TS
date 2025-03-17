// defineProperty | defineProperties 

function Product(name, price, stock){
// vamos alterar para defineProperties
    // this.name = name;
    // this.price = price;
    // this.stock = stock;

    Object.defineProperty(this, 'stock', {
      enumerable: true, // mostra a chave
      value: stock, // jogando o valor de Product(...stock) para o stock
      writable: true, // writable?: pode alterar o valor ?
      configurable: false // configurable?: pode reconfigurar a chave ?
  });

  // Diferença é q 1 é para varias chaves e o outro é para uma chave
    Object.defineProperties(this, {
      name: {
        enumerable: true,
        value: name,
        writable: true,
        configurable: true
      },
      price: {
        enumerable: true,
        value: price,
        writable: true,
        configurable: true
      }
    });
}

const p1 = new Product('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let key in p1) {
  console.log(key);
}