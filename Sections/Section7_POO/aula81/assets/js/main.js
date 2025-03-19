class Person {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  falar() {
    console.log(`${this.name} está falando.`)
}


  comer() {
    console.log(`${this.name} está comendo.`)
  }

  
  beber() {
    console.log(`${this.name} está bebendo.`)
  }
}

function Person2(name, surname){
  this.name = name;
  this.surname = surname;
}

Person2.prototype.falar = function(){
  console.log(`${this.name} está falando.`);
};

const p1 = new Person('Marcelo', 'Magalhães');
const p2 = new Person2('Luiz', 'Magalhães');
console.log(p1, p2);