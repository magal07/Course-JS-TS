/*
 * Retorna uma função que, quando chamada, retorna o nome fornecido.
 * 
 * @param {string} nome - O nome a ser retornado pela função interna.
 * @returns {function} - Uma função que retorna o nome fornecido.
 * 
 * Closure:
 * Um closure é uma função que lembra do ambiente em que foi criada. <-
 * No exemplo abaixo, a função interna retornada por `retornaFuncao` 
 * lembra-se da variável `nome` mesmo após a execução de `retornaFuncao` 
 * ter terminado. Isso ocorre porque a função interna mantém uma referência 
 * ao escopo léxico em que foi criada, permitindo que ela acesse e manipule 
 * variáveis desse escopo mesmo após a função externa ter sido executada.
 */

function retornaFuncao(nome){ 
  return function(){
    return nome;
  };
}

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('teste');

console.log(funcao(), funcao2()); 


