const express = require('express');
const app = express();

//tratar o body das request (post) pra não vir como undefined
//app.use(express.urlencoded({extended: true}));
app.use(
  express.urlencoded(
    {
      extended: true
    }
  ) 
);



    app.get('/', (req, res) => {
      res.send(`
        <form action="/" method="POST">
        Client name: <input type="text" name="name">
        Other: <input type="text" name="others">
        <button>Send Forms</buttmn> 
        </form>`
      );
    });
//                : repebendo parâmetros | ? informando q não necessariamente precisamos de parâmetros
    app.get('/testes/:userId?/:optionalParam?', (req, res) =>{
      console.log(req.params); // partes da rota da url 
      console.log(req.query); // query string.. url q termina na barra/?chave1=valor1&chave2=valor2...'
      res.send(req.query.facebookProfile);
    });

    app.post('/', (req, res) => {
      console.log(req.body);
      res.send(`Send: ${req.body.name}`);
    });
    
    app.get('/contact', (req, res) =>{
      res.send('Thanks...')
    });

    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Server executando na porta 3000');
    });
//Linux
  