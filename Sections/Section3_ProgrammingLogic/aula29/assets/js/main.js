/* Create by i'm

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function printDay() {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']; 
    const hoje = new Date();
    const diaSemanaTexto = diasDaSemana[hoje.getDay()];
    console.log(diaSemanaTexto);
}

printDay();

const date = new Date();

const diaAtual = `${zeroAEsquerda(date.getDate())} º dia do mês.`
console.log(diaAtual);
console.log(`${zeroAEsquerda(date.getDay())} º dia da semana.`);
const diaMes = `${zeroAEsquerda(date.getMonth() + 1)}º mês do ano.`
console.log(diaMes); 

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function printDay() {
//     const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']; 
//     const hoje = new Date();
//     const diaSemanaTexto = diasDaSemana[hoje.getDay()];
//     console.log(diaSemanaTexto);
// } */

function getDiaSemanaTexto(diaSemana){
    
    let diaSemanaTexto;

    switch (diaSemana) {

        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
            default:
                diaSemanaTexto = 'Algo não parece certo.'
    }
}

const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); // buscando a função e acrescentando parâmetro

console.log(diaSemana, diaSemanaTexto);


/* if(diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
} else {
    diaSemanaTexto = ''; 
}
// } */

