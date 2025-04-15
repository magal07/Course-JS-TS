const { texto } = require('./base');

// $1     $2   $3
// (...)(...)(...)

// const regExp1 = /joão|maria|JUÃO/gi;
// console.log(texto.match(regExp1));         // $1 REPRESENTA O Q TA DENTRO DOS PARENTESES
// console.log(texto.replace(/(JUÃO|joão)/gi, '"$1"')); // troca as palavras, NESTE CASO ADD ASPAS
console.log(texto.replace(/(JUÃO|maria)/gi, function(input){
    return ' ############## ' + input.toUpperCase();
})); // neste caso, deixamos todas as letras maiúsculas
