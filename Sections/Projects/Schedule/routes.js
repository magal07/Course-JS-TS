const express = require('express'); // loading express
const route = express.Router(); // Treat routes

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

// Routes of home
route.get('/', homeController.index);

// Routes of login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Routes of contact
route.get('/contact/index', contactController.index);

module.exports = route;