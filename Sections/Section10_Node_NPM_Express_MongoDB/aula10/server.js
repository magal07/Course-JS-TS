const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//tratar o body das request (post) pra não vir como undefined
// app.use(
//   express.urlencoded(
//     {
//       extended: true
//     }
//   ) 
// );
app.use(express.urlencoded({extended: true}));

// app.set('views', path.resolve(__dirname, './src/views')); caminho relativo da pasta de views
app.set('views', path.resolve(__dirname, './src', 'views')); // caminho absoluto da pasta de views
app.set('view engine', 'ejs'); // usando engine ejs pra conseguir utilizar cods js no html comand terminal (npm i ejs)

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Server executando na porta 3000');
});

  