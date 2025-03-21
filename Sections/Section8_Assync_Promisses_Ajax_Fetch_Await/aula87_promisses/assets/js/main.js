function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // sempre usar o resolve e reject, é uma convenção de js
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('Erro'));
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// definindo ordem de execução

esperaAi('Conexão com o BD 1', rand(1, 3))
  // então ->
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando BD', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe resultados DB');
  })
  .catch(e =>{
    console.log('Erro:', e);
  });

  console.log('Isso será exibido antes de qualquer 1 promisse');


