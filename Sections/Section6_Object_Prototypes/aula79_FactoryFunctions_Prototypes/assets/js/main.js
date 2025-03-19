// Factory functions and Prototypes
// Mixin
const falar = {
  falar() {
    console.log(`${this.name} está falando.`)
  },
};

const comer = {
  comer() {
    console.log(`${this.name} está comendo.`)
  },
};

const beber = {
  
  beber() {
    console.log(`${this.name} está bebendo.`)
  },
};

// usando spread operator
// const personPrototype = {...falar, ...comer, ...beber};
const personPrototype = Object.assign({}, falar, comer, beber);

function createPerson(name, surname){ 
  return Object.create(personPrototype, {
    name: {value: name},
    surname: {value: surname}
  });
}

const p1 = createPerson('Luiz', 'Otávio');
const p2 = createPerson('Maria', 'Docarmo');
console.log(p1);
console.log(p2);