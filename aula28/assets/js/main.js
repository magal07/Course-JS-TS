// // const data = new Date(2025, 2, 27, 20, 12); // criando uma function construct, igual no c# - //cria um objeto data/hora/seconds
// // const data = new Date(); // criando uma function construct, igual no c# - //cria um objeto data/hora/seconds
// // const data = new Date('2025-2-27 20:16:59'); // tipo string
// // const data = new Date('2025-2-27 20:16:59.100'); // tipo string
// const data = new Date(1740698575395); // data convertida pelo Date.Now da linha 15.
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // mês começa do 0 
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds()); 
// console.log('Dia semana', data.getDay()); // 0 - Domingo até -> 6 - Sábado
// console.log(data.toString());
// // console.log(Date.now());
function zeroAEsquerda (num) { // add 0 a esquerda caso o num for < que 10, pra não ficar solto 20:40:1
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1;
    const ano = zeroAEsquerda(data.getYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${min}:${seg}`;
}
// criando data
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);