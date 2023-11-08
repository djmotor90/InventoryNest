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
        //each table row will be a link, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality
    try {
        //search through the queries and find those which match a column name from the 
        //const columnNames = await Product.rawAttributes;

        //you will eventually have to rewrite out the where here dynamically
        const foundProducts = await Product.findAll({
            where: {
                product_name: { [Op.like]: `%${req.query.product_name ? req.query.product_name : ''}%` }
            }
        });
        res.status(200).json(foundProducts);
    } catch (err) {
        res.status(500).json(err);
    };
});
//Post a new entry to the database
products.post('/', async (req, res) => {
    //adding an entry 
    //here you should do backend validation

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
        //Note: i can do this with an AWS bucket and can easily add/edit them too, kim im not sure how you want to do this 
        res.status(200).json(foundProduct)
    } catch (err) {
        res.status(500).json(err)
    }
});
products.put('/:id', async(req,res) => {
    //update the entry 
    //here you should do backend validation 
});
products.delete('/:id', async(req,res) => {
    try {
        //TODO: it may be better in the future to not delete it, but maybe move it to a history database so, if you please, you can still do analytics on it
        // in fact this will actually just straight up be needed
        const deletedProduct = await Product.destroy({
            where: {product_id: req.params.id}
        });
        //TODO you will have to query through inventory and delete those as well
        const deletedInventory = await Inventory.destroy({
            where: {product_id: req.params.id}
        })
        res.status(200).json({
            message: `successfully deleted ${deletedProduct} band(s), and deleted all associated inventories: ${deletedInventory}`
        });
    } catch (err) {
        res.status(500).json(err);  
    }
});


module.exports = products;










