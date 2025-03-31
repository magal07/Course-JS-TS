require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Pronto'); 
  })
  .catch(e => console.log(e));
const session = require('express-session'); 
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes'); 
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public'))); // caminho absoluto de conteudos statico
const sessionOptions = session({
  secret: 'sdasdsdsadsadsadsadsadasdsadsa',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, './src', 'views')); // caminho absoluto da pasta de views
app.set('view engine', 'ejs'); // usando engine ejs pra conseguir utilizar cods js no html comand terminal (npm i ejs)

// NOSSAS MIDDLEWARES
app.use(csrf());
app.use(middewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('Pronto', () => { // 'Pronto TEM Q SER IGUAL AO EVENTO EMIT'
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server executando na porta 3000');
  });
});



