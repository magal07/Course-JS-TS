const express = require('express'); // loading express
const route = express.Router(); // Treat routes
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Routes of home
route.get('/', homeController.homePage);
route.post('/', homeController.treatPost);

// Routes of contact
route.get('/contact', contactController.homePage);

module.exports = route;