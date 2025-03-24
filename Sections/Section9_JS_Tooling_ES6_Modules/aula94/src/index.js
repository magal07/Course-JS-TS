// import {name as name2, surname as surnameModule1, age, sum} from './module1';
// import {nameModule1, surname, age, sum, Pessoa as PessoaModule1} from './module1';

// passei a variavel name para name2 neste arquivo, e a name tornasse name local
// neste arquivo \/
// const name = 'João';
//surname por exemplo não existe mais, porém surnameModule1 é a (surname do module1.js)

// console.log(nameModule1, surname, age);
// // console.log(name, name2, surnameModule1, age);
// console.log(sum(5,5));

// const p1 = new PessoaModule1('Luiz', 'Otávio');
// console.log(p1);

// //IMPORTANDO MODULO COMPLETO \/
// import * as MyModule from './module1';
// console.log(MyModule);

// import qualquerNome from './module1';
// console.log(qualquerNome(5, 5));

// import multiplica, {name, surname, age, sum} from './module1';
// console.log(multiplica(5,40));
// console.log(name,surname,age,sum(4,4));

import Pessoa, {name, surname} from './module1';
const p1 = new Pessoa (name, surname);
console.log(p1);