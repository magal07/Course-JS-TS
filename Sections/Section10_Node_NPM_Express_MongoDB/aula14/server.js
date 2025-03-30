require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose'); // emitir sinal , base de dados conectada
mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=> {
  app.emit('Pronto'); // capturando evento
})
.catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public'))); // caminho absoluto de conteudos staticos

app.set('views', path.resolve(__dirname, './src', 'views')); // caminho absoluto da pasta de views
app.set('view engine', 'ejs'); // usando engine ejs pra conseguir utilizar cods js no html comand terminal (npm i ejs)

// NOSSAS MIDDLEWARES
app.use(middewareGlobal);
app.use(routes);

app.on('Pronto', () => { // 'Pronto TEM Q SER IGUAL AO EVENTO EMIT'
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Server executando na porta 3000');
});
});



  