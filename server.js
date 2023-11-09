// DEPENDENCIES
const express       = require('express');
const app           = express();
const { Sequelize } = require('sequelize');
//database connection required on the landing page
const db            = require('./models');
const port = 3001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Routes
app.get('/', (req, res) => {
    //entry page, show information about the app itself
    //what is needed here from the backend
    // lets have a landing page that displays number of warehouses active
    // number of total sales
    // revenue chart
    // most recent sale
    res.send('Hello World!');
});

//DYNAMIC ROUTES 

app.use('/products', require('./controllers/products.js'));
app.use('/customers', require('./controllers/customers.js'));
app.use('/warehouses', require('./controllers/warehouses.js'));
app.use('/reporting', require('./controllers/reporting.js'))


//CATCHALL ROUTE
app.get('*', (req,res) => {
    response.status(404).json({message: 'Page not found'});
});



// LISTEN
app.listen(port, () => {
    console.log(`InventoryNest app listening at http://localhost:${port}`);
});