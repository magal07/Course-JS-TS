const express = require('express'); // loading express
const route = express.Router(); // Treat routes
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Routes of home
route.get('/', homeController.index);

// Routes of login
route.get('/login/index', loginController.index);

module.exports = route;