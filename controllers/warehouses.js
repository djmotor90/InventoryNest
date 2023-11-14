//DEPENDENCIES
const warehouses    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Warehouse, Inventory, Product } = db;
const { Op }        = require('sequelize');

//STATIC ROUTES
//Home route: simply needs to send over all table data to populate a table
warehouses.get('/', async (req,res) => {
    // Show a table of all products, therefore need to send over all the data
        //each table row will be a link, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality, likely just do sort via bootstrap 
    try {
        //WHAT THIS WILL EVENTUALLY HAVE TO DO: handle when we have queried data coming back 
        //search through the queries and find those which match a column name from the 
        const columnNames = Object.keys(Product.rawAttributes);
        let whereObject = {};
        for (let i=0; i< Object.keys(req.query).length; i++)
        {
            if (columnNames.includes(Object.keys(req.query)[i]))
            {
                whereObject[Object.keys(req.query)[i]] = req.query(Object.keys(req.query)[i]);
            };
        };
        //you will eventually have to rewrite out the where here dynamically
        const foundProducts = await Warehouse.findAll({
            where: whereObject,
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(foundProducts);
    } catch (err) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    };
});
//Post new route: a new warehouse to the database
warehouses.post('/', async (req, res) => {
    try {
        //TODO back end data validation
        let sqlData = req.body;
        const newWarehouse = await Warehouse.create(sqlData);
        let warehouse_id =  newWarehouse.warehouse_id;
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(201). res.status(201).json({message:'totaladdsuccess' , id:warehouse_id});
    } catch (err) {
        //do some err
        console.error(err);
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    }
});
//Creation Route: simply needs to send over the appropriate fields and any field constraints
warehouses.get('/new', async (req, res) => {
    let formInfo = {}
    //look into the database and find the appropriate fields
    //send over a json of the following structure
    // field name : fieldtype, fieldrequirements (so like if ENUM give it the array), isAllowNull
    Object.keys(Warehouse.rawAttributes).forEach( key =>{
        let value = null;
        switch (Warehouse.rawAttributes[key].type.toString())
        {
            case 'DATE':
                value = ['date', []]
                break;
            case 'ENUM':
                value = ['select',  Warehouse.rawAttributes[key].values];
                break;
            case 'FLOAT':
            case 'INTEGER':
                //check if primary key, break out 
                value = !Warehouse.rawAttributes[key].primaryKey ? ['number', []] : null; 
                 //later you could put min max in there, int, break this off into sep ints and floats, etc
                break;
            case 'VARCHAR(255)': //thus far we havent defined any limits to size and dont plan on it, but this can be converted into a regex
                //TODO eventually will have to deal with filename and make value file
                value = ['text', []];
                break;
            case 'TEXT':
                value = ['textarea', []];
                break;
        }
        //Now loop through and add if this input is required or not
        //remember this is allow null not required
        if (value !== null)
        {
            //if the model doesnt say, make it allow null
            value.push(Warehouse.rawAttributes[key].allowNull === undefined ? true : Warehouse.rawAttributes[key].allowNull);
            formInfo[key] = value;
        }
    });
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(formInfo);
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

//Purpose: transfers products from one warehouse to another. From the original warehouse/:id page, there will be a button that says "transfer"
//this will show all products within warehouse a that you can select from, and then a dropdown to choose the warehouse you are bringing it to.
//allow them to select multiple
warehouses.get('/:id/transfer', async(req,res) => {
    try {
        
    } catch (error) {
        
    }
});


module.exports = warehouses;