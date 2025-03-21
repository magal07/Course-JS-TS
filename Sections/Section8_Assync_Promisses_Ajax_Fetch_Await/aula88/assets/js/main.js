function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // sempre usar o resolve e reject, é uma convenção de js
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string'){
        reject(new Error('Caí no erro'));
       return;
       }
      resolve(msg.toUpperCase() + ' - Passei na promisse');
      return;
    }, tempo);
  });
}
// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', rand(1, 5)), // , 300 terceiro
  esperaAi('Promise 2', rand(1, 5)), // , 500 entregará primeiro
  esperaAi(1000, rand(1, 5)), // ,100 0segundo
  // esperaAi(1000, 1000), // exemplo de false, pois só aceita string
  // 'Outro valor'
];
/* Promises.all = tenta resolver todas, se 1 der errado rejeita todas
Promise.all(promises)
  .then(function(value) {
    console.log(value);
  })
  .catch(function (erro) {
    console.log(erro);
  })*/
    /* Promise.race - resolve a primeira, se rejeitar breka, caso contrário continua até brekar
    Promise.race(promises)
    .then(function(value) {
      console.log(value);
    })
    .catch(function (erro) {
      console.log(erro);
    }) */
/* promisse.resolve
      function baixaPagina(){
        const emCache = false;
        if(emCache){
          return Promise.resolve('página em cache');
        } else {
          return esperaAi('Baixei a página', 2000);
        }
      }

baixaPagina()
.then(dadosPagina =>{
  console.log(dadosPagina);
})
.catch(e => console.log(e)); */
/* promisse.reject - rejeita logo de cara caso entre como true 
function baixaPagina(){
  const emCache = true;
  if(emCache){
    return Promise.reject('página em cache');
  } else {
    return esperaAi('Baixei a página', 2000);
  }
}

baixaPagina()
.then(dadosPagina =>{
console.log(dadosPagina);
})
.catch(e => console.log('Erro', e)); */