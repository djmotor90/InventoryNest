//DEPENDENCIES
const products     = require('express').Router();
const { response } = require('express');
const db           = require('../models');
const { Op }       = require('sequelize');
const { Product}   = db;


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

products.get('/:id', async (req,res) => {
    try {
        const foundProduct = await Band.findOne({
            where: {product_id: req.params.product_id},
            include:[
                {model: Meet_Greet, as: "meet_greets", include: {
                    model: Event, as: "event",
                    where: {name: { [Op.like] : `%${req.query.event ? req.query.event : ''}%`}}
                }},
                {model: Set_Time, as: "set_times", include: {
                    model: Event, as: "event",
                    where: {name: { [Op.like] : `%${req.query.event ? req.query.event : ''}%`}}
                }},
            ]
        });
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).json(err)
    }
});
products.get('/:edit', (req, res) => {
    // show a table for editing information
});


//BASIC CRUD applications
products.post('/', (req, res) => {
    //adding an entry 
});
products.get('/new', (req, res) => {

});
products.post('/new', (req, res) => {

});

products.post('/new', (req, res) => {

});

module.exports = products;










