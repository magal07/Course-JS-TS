// PADRÃO MAIS UTILIZADO \/
// exportando diretamente na criação, sem ter q abrir chaves  { name... surname... etc.}
// export const name = 'Marcelo';
// export const surname = 'Magalhães';
// export const age = 30;
// const cpf = 'aaaaa'; // praticamente é uma variável privada

 export const name = 'Marcelo';
 export const surname = 'Magalhães';
 export const age = 30;
const cpf = 'aaaaa'; // praticamente é uma variável privada

// default pra utilizar qualquer nome na função, só posso usar 1 default
// export default function sum(x,y){
export function sum(x,y){
  return x + y;
}
// name pode receber qualquer nome de variável
// export {name as default, surname, age, sum};

// export default (x, y) => x * y;

// export class Pessoa{ 
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }


//as = como
//exporte name como nameModule1  
  // export {name as nameModule1, surname, age, sum};


  export default class Pessoa {
    constructor(name, surname){
      this.name = name;
      this.surname = surname;
    }
  }