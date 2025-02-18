
    //            01234567
let umaString = 'Um Texto';

console.log(umaString[4]); // T = Ler somente 0 índice 4 
console.log(umaString.charAt(6)); // x = Ler somente 0 índice 6
console.log(umaString.concat(' em um lindo dia.')); // Um Texto em um lindo dia. = Concatenares
console.log(umaString + ' em um lindo dia.'); // Um Texto em um lindo dia. = Concatenares 
console.log(`${umaString} em um lindo dia.`); // Um Texto em um lindo dia. = Concatenares
console.log(umaString.indexOf('Texto')); // 3 = Verificar a posição do texto
console.log(umaString.indexOf('o', 3)); // 5 = Verificar a posição do texto apartir do índice 3
console.log(umaString.lastIndexOf('m', 3)); // 2 = Verificar a posição do texto apartir do índice 3
console.log(umaString.match(/[a-z]/)); // U = Verificar a posição do texto apartir do índice 3
console.log(umaString.search(/x/)); // 6 = Verificar a posição do texto apartir do índice 3
console.log(umaString.replace('Um', 'Outro')); // Outro Texto = Substituir o texto
console.log(umaString.replace(/#/g, 'T')); // Um TexTo = Substituir o texto
console.log(umaString.length); // 8 = Tamanho da string
console.log(umaString.slice(3, 7)); // Text = Cortar a string
console.log(umaString.slice(-3)); // xto = Cortar a string
console.log(umaString.slice(-3, -1)); // xt = Cortar a string
console.log(umaString.substring(3, 7)); // Text = Cortar a string
console.log(umaString.substring(3)); // Texto = Cortar a string
console.log(umaString.split(' ')); // [ 'Um', 'Texto' ] = Dividir a string
console.log(umaString.toUpperCase()); // UM TEXTO = Maiúscula
console.log(umaString.toLowerCase()); // um texto = Minúscula

