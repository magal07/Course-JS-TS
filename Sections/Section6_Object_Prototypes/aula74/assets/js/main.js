/* 
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo (__proto__) que 
vem da propriedade prototype da função construtora que foi usada para cria-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai 
tentar encontrar este membro no próprio objeto e depois a cadeira de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.
*/


// Construtora - molde (classe)
function Peaple(name, surname) {
  this.name = name;
  this.surname = surname;
/* 
* Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai 
tentar encontrar este membro no próprio objeto

  fullName = () => {`${this.name} + ' ' + ${this.surname}`}; */
}
// Peaple.prototype === pessoa1.__proto__ // true
Peaple.prototype.fullName = function() {
  return this.name + ' ' + this.surname;
};



const pessoa1 = new Peaple('Luiz', 'O');
const pessoa2 = new Peaple('Maria', 'O');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

