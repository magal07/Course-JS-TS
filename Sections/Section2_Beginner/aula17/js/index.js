
function saudacao(nome) {
    return `Olá, seja bem-vindo! (${nome})`;
}

const variavel = saudacao('Marcelo');
console.log(variavel); // undefined 


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(50, 2);
console.log(resultado);
console.log(soma(2, 2));
console.log(soma(3, 3));
console.log(soma(4, 4));

// const raiz = function(n) {

const raiz = n => n ** 0.5; //arrow functionn 

console.log(raiz(9));