//DEPENDENCIES
const express = require('express');
const app = express();
const port = 3001;

//CONFIGURATION
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});



//Dynamic Routes 
// app.use('/users', require('./controllers/users.js'));
// app.use('/items', require('./controllers/items.js'));
// app.use('/warehouses', require('./controllers/warehouses.js'));
// app.use('/reporting', require('./controllers/reporting.js'));


//Catchall Route
app.get('*', (req,res) => {
    res.status(404).send('<h1> 404 Page not Found </h1>');
})

app.listen(port, () => {
    console.log(`InventoryNest app listening at http://localhost:${port}`);
  });