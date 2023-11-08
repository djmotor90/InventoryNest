const express = require('express');
const items = express.Router();

items.get('/',(req,res) => {
    // Show a table of all items 
 

});

items.get('/:id',(req,res) => {
    // show each individual items information
    
});
items.get('/:edit', (req, res) => {
    // show a table for editing information
});


//BASIC CRUD applications
items.post('/', (req, res) => {
    //adding an entry 
});
items.get('/new', (req, res) => {

});
items.post('/new', (req, res) => {

});

items.post('/new', (req, res) => {

});











