// try {
// // console.log(a); // vai dar erro
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou erro');
//   console.log('Fechei o arquivo');
//   try {
//     console.log(b);
//   } catch(e) {
//     console.log('Deu erro ');
// } finally { 
//   console.log('Eu também sou finally');
//   }

// } catch (e) {
//   console.log('Tratando o erro');
// } finally {
//     console.log('Finally: Sempre serei executado!')
// }       

function returnHour(data) {
  if (data && !(data instanceof Date)){ // verificando se a data tem tipo DATE e se o valor foi lançado
    throw new TypeError('Waiting for date instance')
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hour = returnHour();
  console.log(hour);
} catch(e) {
  // tratar erro
} finally {
  console.log('Tenha um bom dia.');
}

// aula sobre tratamento de erros utilizando como exemplo datas
