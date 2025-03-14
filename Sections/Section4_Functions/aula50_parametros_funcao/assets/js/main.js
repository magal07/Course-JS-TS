// function tem 1 palavra especial chamada arguments q sustenta todos argumentos enviados

// function funcao(a,b,c,d,e,f) {
//   let total = 0;
//   for(let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a,b,c,d,e,f);
// }
// funcao(1,2,3);

// function funcao(a,b = 2, c = 4){ 
//   // b = b || 0; // obter valor padrão

//   console.log(a + b + c);
// }
// //        B assume quer será o valor padrão
// funcao(2, undefined, 20);


// function funcao({name, surname, age,}) {
//   console.log(name, surname, age);
// }
// funcao({ name: 'Luiz', surname: 'Otávio', age: 20});

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz KSA', 'Miranda', '30']);


const conta = function(operador, acumulador, ...numeros){ // usando o hash operator ... para informar que todos os outros numeros farão parte da array
  for(let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;
      
  }
  console.log(acumulador);
};

conta('*', 1, 20,30,40,50);
