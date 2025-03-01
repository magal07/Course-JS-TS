// EXEMPLO 1 ENORME DO PROFESSOR!
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
   const diaSemanaTxt = ['domingo', 'segunda', 'terça', 
    'quarta', 'quinta', 'sexta', 'sabado'];
    return diaSemanaTxt[diaSemana];
}
function getNomeMes(numeroMes){ 
  const meses = ['janeiro', 'fevereiro', 'março', 'abril','maio', 'junho',
     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']; 
  return meses[numeroMes];
}
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
const diaSemana = data.getDay();
const numeroMes = data.getMonth();

const nomeDia = getDiaSemanaTexto(diaSemana);
const nomeMes = getNomeMes(numeroMes);

return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` + 
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
);
}
h1.innerHTML = criaData(data); 

/* MELHOR MODELO: SUBSTITUIMOS TODO EXEMPLO 1 POR SOMENTE ISTO \/ 
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', 
              {dateStyle: 'full', timeStyle: 'short'}); */