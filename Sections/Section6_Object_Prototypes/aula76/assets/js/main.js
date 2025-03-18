//Product - aumento, desconto
// camiseta = cor, caneca = material

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function(amount){
  this.price += amount;
};

Product.prototype.discount = function(amount){
  this.price -= amount;
};

function TShirt(name, price, color){
  Product.call(this, name, price);
  this.color = color;
}

// TShirt.prototype.construct = TShirt; <-- ela inicia assim, \/ busca o protótipo e dps retorna linha 22
TShirt.prototype = Object.create(Product.prototype);// criando  prototype vazio e setando o prototype do obj vazio como produto
TShirt.prototype.constructor = TShirt;

TShirt.prototype.increase = function(percentual){
  this.price = this.price + (this.price * (percentual / 100));
};
// const product = new Product('Gen', 111);
// const tshirt = new TShirt('Regatta', 7.5, 'Black');
// console.log(product);
// console.log(tshirt);

// função caneca 

function Mug(name, price, material, stock){
  Product.call(this, name, price);
  this.material = material;
  
  Object.defineProperty(this, 'stock',{
    enumerable: true,
    configurable: false,

    get: () => {
      return stock;
    },
    set: (value) => {
      //O problema é que number deve ser escrito como uma string, já que typeof 
      // retorna uma string representando o tipo do valor. A forma correta é: 'number' ou "number"
      if(typeof value !== 'number') return;
      stock = value;
    }
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;


const product = new Product('Gen', 111);
const tshirt = new TShirt('Regatta', 7.5, 'Black');
const mug = new Mug('Mug', 13, 'Cerâmica', 5);

mug.stock = 100;

console.log(mug.stock);
console.log(mug);
console.log(product);
console.log(tshirt);

