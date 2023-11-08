// DEPENDENCIES
const express       = require('express');
const app           = express();
const { Sequelize } = require('sequelize');

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
    //most recent sale
});

//DYNAMIC ROUTES 
app.use('/users', require('./controllers/users.js'));
app.use('/items', require('./controllers/items.js'));
app.use('/warehouses', require('./controllers/warehouses.js'));
app.use('/reporting', require('./controllers/reporting.js'));


//CATCHALL ROUTE
app.get('*', (req,res) => {
    response.status(404).json({message: 'Page not found'});
});



// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Inventory Nest backend running on port ${process.env.PORT}`);
});