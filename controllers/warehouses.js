//DEPENDENCIES
const warehouses    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Warehouse, Inventory, Product } = db;
const { Op }        = require('sequelize');

//STATIC ROUTES
//Home route: simply needs to send over all table data to populate a table
warehouses.get('/', async (req,res) => {
    // Show a table of all warehouses, therefore need to send over all the data
        //each table row will be alink, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality
    try {
        //you will eventually have to rewrite out the where here dynamically
        const foundWarehouses = await Warehouse.findAll();
        res.status(200).json(foundWarehouses);
    } catch (err) {
        res.status(500).json(err);
    };
});
//Post a new entry to the database
warehouses.post('/', async (req, res) => {
    //adding an entry 
    //here you should do backend validation

});

//Creation Route: simply needs to send over the appropriate fields and any field constraints
warehouses.get('/new', async (req, res) => {
    
});



//Singular Product form: needs to show all product information 
warehouses.get('/:id', async (req,res) => {
    try {
        //provide every warehouse as well that it is located in and the amount
        const foundWarehouse = await Warehouse.findOne({
            where: {warehouse_id: req.params.id},
            include:[
                {model: Inventory, as: "inventories", include: {
                    model: Product, as: "product",
                }},
            ]
        });
        //todo: it may also make sense to include all transfer history (in v out), or this could be in a seperate place
        res.status(200).json(foundWarehouse)
    } catch (err) {
        res.status(500).json(err)
    }
});
warehouses.put('/:id', async(req,res) => {
    //update the entry 
    //here you should do backend validation 
});
warehouses.delete('/:id', async(req,res) => {
    try {
        //TODO: it may be better in the future to not delete it, but maybe move it to a history database so, if you please, you can still do analytics on it
        // in fact this will actually just straight up be needed
        const deletedWarehouse = await Warehouse.destroy({
            where: {warehouse_id: req.params.id}
        });
        //TODO you will have to query through inventory and delete those as well
        //perhaps instead you should move all the inventory to the nearest warehouse, and if it doesnt fit, ask the user if they want to take a money hit 
        const deletedInventory = await Inventory.destroy({
            where: {warehouse_id: req.params.id}
        })
        res.status(200).json({
            message: `successfully deleted ${deletedProduct} band(s), and deleted all associated inventories: ${deletedInventory}`
        });
    } catch (err) {
        res.status(500).json(err);  
    }
});


module.exports = warehouses;