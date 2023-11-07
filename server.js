//DEPENDENCIES
const express = require('express');


const app = express();

//CONFIGURATION
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Routes
app.get('/', (req, res) => {
    //entry page, show information about the app itself
});

//Break this out into "tables" that it would make sense for the company director to look at 

// USERS controller
//table of all your users
//  -add, delete, update, query users
// FE thing have an individual page
//TODO user picture

// Items controller
//table of all your items
//  -add, delete, update, query items 
// FE thing have an individual page
//TODO item picture 

// warehouses controller
//table of all your warehouses
//  -add, delete, update, query warehouses
// FE thing have an individual page
// indivdual warehosue we point to a real address and have map functionality


//Reporting controller
// see sales history
// track hot/cold items
// total sales tracker

//Dynamic Routes 
app.use('/users', require('./controllers/users.js'));
app.use('/items', require('./controllers/items.js'));
app.use('/warehouses', require('./controllers/warehouses.js'));
app.use('/reporting', require('./controllers/reporting.js'));


//Catchall Route
app.get('*', (req,res) => {
    res.status(404).send('<h1> 404 Page not Found </h1>');
})