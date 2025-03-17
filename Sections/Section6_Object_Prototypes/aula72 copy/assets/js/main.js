// defineProperty | defineProperties 

function Product(name, price, stock){

    this.name = name;
    this.price = price;

    let fullStock = stock;

    Object.defineProperty(this, 'stock', {
      enumerable: true, // mostra a chave
      configurable: false, // configurable?: pode reconfigurar a chave ?
      get: () => {
        return stock;
      },
      set: (value) => {
        if(typeof value !== 'number'){ // se n for number
          throw new TypeError('Invalid value');
        }
        fullStock = value;
      }
  });
}

function createProduct(name){
  return {
    get name() {
      return name;
    },
    set name(value){
      value = value.replace('coisa', ''); // removendo palavra coisa do p2.name =...""
      name = value;
    }
  };
}

const p2 = createProduct('Camiseta');
p2.name = 'Qualquer coisa';
console.log(p2.name);


// const p1 = new Product('Camiseta', 20, 3);
// p1.stock = 500;
// console.log(p1.stock);
