
// Primitivos (imutáveis) - string, number, boolean, undefined, null 
// (bigint, symbol)

/* let nome = 'Luiz';
// nome[0] = "R";
// console.log(nome[0], nome);

// let a = 'A'; 
// let b = a; // copy
// console.log(a, b);
// a = 'Outra coisa';
// console.log(a, b);

// Referência (mutável) - array, object, function passados por referência
*/ 

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
// const b = a; // desta forma, b é uma referência de a e não uma cópia, e os 
// dois apontam para um mesmo local
const b = {...a}; // cópia de a espalhando os valores de a em b, tornando b 
// independente de a
a.nome = 'João';
console.log(a);
console.log(b);

// let a = [1, 2, 3,];
// let b = [...a]; // b é uma referência de a
// let c = b; // c é uma referência de b que é uma referência de a
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b); // pois apontam para o mesmo lugar na memória

// a.push('Luiz');
// console.log(c); // c também é alterado, pois é uma referência de b que é
//  uma referência de a

// console.log(a, c);
