/* 
Operadores Lógicos
 && -> And -> E
 !! -> Or -> Ou
 ! -> NOT -> Não
 */
// const expressaoAnd = true && true && true && false && true;
//  console.log(expressaoAnd);
//  const expressaoOr = false || false;
//  console.log(expressaoOr);

 const usuario = 'Luiz';
 const senha = '123456';

//  const vaiLogar = usuario === 'Luiz';
//  console.log(vaiLogar);

const vaiLogar = usuario === 'Luiz' && senha === '123456'; // true
console.log(vaiLogar) // 
console.log(!!true); // true