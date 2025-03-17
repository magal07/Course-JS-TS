/* const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Miranda';
// pessoa1.idade = 35;
// pessoa1.falarNome = function() {
//   return `${this.nome} está falando seu nome.`;
// }
// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date(); // CRIEI UMA INSTÂNCIA DE DATE
//   return dataAtual.getFullYear() - this.idade; // busquei o ano atual e subtrai pela idade
// }

// for(let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }




// Factory Functions / Constructor Functions / Classes  -> 3 formas de criar objetos em JS
 */

/* Factory Function
function createPeople(name, surname){ 
  return {
    name, 
    surname,
      get fullname() { // fullname: propriety that is a function - not necessary get - but it's a good practice
      return `${this.name} ${this.surname}`
    }
  }
}

const p1 = createPeople('Luiz', 'Otávio');
console.log(p1.fullname); 
*/

/* Constructor Function */
// molde \/ 
function People(name, surname) {
  this.name = name;
  this.surname = surname;
  Object.freeze(this); // não permite alterar o valor das propriedades do objeto
  
  };
//{} <- this :  a palavra new cria um novo objeto vazio e faz o this apontar para o objeto criado
// new também retorna o objeto criado, logo, em people não precisamos usar return this; como por exemplo.
const p1 = new People('Luiz', 'Otávio');

// posso alterar o valor pois não estou alterando o endereço
// de memória e sim o valor da propriedade name do objeto p1
p1.name = 'Qualquer coisa';  // <-- linhas acima explicam isso

const p2 = new People('Maria', 'Miranda');

  console.log(p1);
  console.log(p2);
