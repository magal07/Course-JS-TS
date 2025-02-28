// document.addEventListener('DOMContentLoaded', function() {
//     var mainTitle = document.getElementById('data-atual');
//     mainTitle.textContent = 'Novo título adicionado pelo main.js!';
// });


// função de dia da semana 

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}


function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {

        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
            default:
                diaSemanaTexto = ' '
    }
}


function getMesAnoTexto(mesAno){
    
    let mesAnoTexto;

    switch (mesAno) {

        case 0:
            mesAnoTexto = 'Janeiro';
            return mesAnoTexto;
        case 1:
            mesAnoTexto = 'Fevereiro';
            return mesAnoTexto;
        case 2:
            mesAnoTexto = 'Março';
            return mesAnoTexto;
        case 3:
            mesAnoTexto = 'Abril';
            return mesAnoTexto;
        case 4:
            mesAnoTexto = 'Maio';
            return mesAnoTexto;
        case 5:
            mesAnoTexto = 'Junho';
            return mesAnoTexto;
        case 6:
            mesAnoTexto = 'Julho';
            return mesAnoTexto;
        case 7:
            mesAnoTexto = 'Agosto';
            return mesAnoTexto;
        case 8:
            mesAnoTexto = 'Setembro';
            return mesAnoTexto;
        case 9:
            mesAnoTexto = 'Outubro';
            return mesAnoTexto;
        case 10:
            mesAnoTexto = 'Novembro';
            return mesAnoTexto;
        case 11:
            mesAnoTexto = 'Dezembro';
            return mesAnoTexto;

            default:
                mesAnoTexto = 'Algo não parece certo.'
    }
}

// Correção de `data.getMonth` e `getMesAnoTexto`
// Corrigido `data.getMonth()` para `mesAno = data.getMonth()`
const data = new Date('2019-10-7 22:52:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); 
const diaAtual = (data.getDate());
const mesAno = data.getMonth();
const mesAnoTexto = getMesAnoTexto(mesAno);  // Chamada da função correta
const anoNumber = data.getFullYear();
const horasInf = zeroAEsquerda(data.getHours());
const minutosInf = zeroAEsquerda(data.getMinutes());
const segundosInf = zeroAEsquerda(data.getSeconds());

console.log(`${diaSemanaTexto}, ${diaAtual} de ${mesAnoTexto} de ${anoNumber}`);
console.log(`${horasInf}:${minutosInf}:${segundosInf}`);