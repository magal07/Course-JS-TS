// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'; 
// operação ternária 

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // 

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao); //  
// if(pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else{
// console.log('Usuário normal');
// }  

   
   
