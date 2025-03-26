const express = require('express');
const app = express();
      /*   CRIAR , LER, ATUALIZAR, APAGAR
 CRUD -> CREATE, READ, UPDATE, DELETE
          POST   GET     PUT    DELETE 
          
          HTTP://meusite.com/ <-- GET - > ENTREGUE A PAGINA
          http://meusite.com/sobre <-- GET - ENTREGUE A PÁGINA /sobre
          INICIAR SERVER = SHIFT + ALT + R 
            INICIAR SERVER PELO TERMINAL = node server.js OU...
              CTRL + ALT + M = stopa o server

          */ 
// '/' -> ROTA | () <- função (parâmetros requisição e resposta)
    app.get('/', (req, res) => {
      res.send(`
        <form action="/" method="POST">
        Client name: <input type="text" name="nome">
        <button>Send Forms</buttmn> 
        </form>`
      );
    });

    app.post('/', (req, res) => {
      res.send('Recept forms');
    });

    app.get('/contact', (req, res) =>{
      res.send('Thanks...')
    });

    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Server executando na porta 3000');
    });

  