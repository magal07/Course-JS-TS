const express = require('express');
const app = express();
const routes = require('./routes');

//tratar o body das request (post) pra não vir como undefined
// app.use(
//   express.urlencoded(
//     {
//       extended: true
//     }
//   ) 
// );
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Server executando na porta 3000');
});

  