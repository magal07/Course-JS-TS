// Escrever uma função ePaisagem que recebe 2 argumentos e informa se 
// estamos em modo paisagem ou retrato.


// function ePaisagem(largura, altura) {
//     if(largura === altura){
//         console.log(`Imagem em formato quadrado`);
//     }
//     return largura > altura; 
// }



// utilizando ePaisagem como função anônima com arrow function
const ePaisagem = (largura, altura) => largura > altura ? 'paisagem' : 'retrato';
const largura = 1920;
const altura = 1921;
console.log(`A resolução ${largura}x${altura} está em modo (${ePaisagem(largura, altura)})`);