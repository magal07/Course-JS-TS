//Simbol key private entry object
 /* Example car
const _speed = Symbol('speed');

class Car {
  constructor(name){
    this.name = name;
    this[_speed] = 0;
  }

  // configurando um setter pra velocidade privada
  set speed(value){
    if(typeof value !== 'number') return;
    if(value >= 100 || value <= 0) return;
    this[_speed] = value;
  }

  get speed(){
    return this[_speed];
  }
 
  accelerate(){
    if(this[_speed] >= 100) return;
    this[_speed]++;
  }
  breake(){
    if(this[_speed] <= 0) return;
    this[_speed]--;
  }
}  

const c1 = new Car('Fusca');
// for(let i = 0; i <= 200; i++) {
//   c1.accelerate();
// }


c1.speed = 55;
console.log(c1.speed);
*/

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullName(){
    return this.name + ' ' + this.surname;
  }
  set fullName(value){
    value = value.split(' ');
    this.name = value.shift();
    this.surname = value.join(' ');
   }  
}
const p1 = new Person('Marcel', 'Carrara');
p1.fullName = 'Marcelo Carrara';
console.log(p1.name);
console.log(p1.surname);
// console.log(p1.fullName); // <-- lembrar de chamar como atributo e não função 
