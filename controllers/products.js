//DEPENDENCIES
const products     = require('express').Router();
const { response } = require('express');
const db           = require('../models');
const { Op }       = require('sequelize');
const { Product, Inventory, Warehouse } = db;


//STATIC ROUTES
//Home route: simply needs to send over all table data to populate a table
products.get('/', async (req,res) => {
    // Show a table of all products, therefore need to send over all the data
        //each table row will be alink, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality
    try {
        //you will eventually have to rewrite out the where here dynamically
        const foundProducts = await Product.findAll({
            where: {
                product_name: { [Op.like]: `%${req.query.product_name ? req.query.product_name : ''}%` }
            }
        });
        res.status(200).json(foundProducts);
    } catch (error) {
        res.status(500).json(err);
    };
});
//Post a new entry to the database
products.post('/', async (req, res) => {
    //adding an entry 
});

//Creation Route: simply needs to send over the appropriate fields and any field constraints
products.get('/new', async (req, res) => {

});



//Singular Product form: needs to show all product information 
products.get('/:id', async (req,res) => {
    try {
        //provide every warehouse as well that it is located in and the amount
        const foundProduct = await Product.findOne({
            where: {product_id: req.params.id},
            include:[
                {model: Inventory, as: "inventories", include: {
                    model: Warehouse, as: "warehouse",
                }},
            ]
        });
        //these should be their own individual trycatches, even if they fail some data should be sent over
        //Todo: lets also go through the delivery detail and decide if its a hot or cold item
        //Todo: lets go and get the picture and send over a 64bit version
        res.status(200).json(foundProduct)
    } catch (err) {
        res.status(500).json(err)
    }
});
products.get('/edit', (req, res) => {
    // show a table for editing information
});





products.post('/new', (req, res) => {

});

module.exports = products;










