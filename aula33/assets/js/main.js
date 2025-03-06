const person = { 
    name: 'Marcelo',
    surname: 'Magalhães',
    age: 30,
    addres: {
        road: 'Av. Brasil',
        numberRoad: 320
    }
};
/* busca usando o .
const nome = pessoa.nome;
console.log(nome); */ 

// Atribuição via desestruturação (Objetos)
  // definindo 'VALOR PADRÃO'
// const {name: nameIs = ' ', surname, age, addres: {road, numberRoad}} = person;
//  //        : = para alterar o nome da variável 
//  console.log(`${nameIs} ${surname}, Age: ${age}, Address: ${road}, Number: ${numberRoad}`);// console.log(nameIs, surname,age, addres);

 const {name: nameIsOther = ' ', surname, ...rest} = person;
 console.log(nameIsOther, surname, rest);