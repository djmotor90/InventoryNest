//DEPENDENCIES
const customers    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer } = db;
const { Op }        = require('sequelize');


//Home page simly needs to show all entries in a table
customers.get('/', async (req,res) => {
    // Show a table of all products, therefore need to send over all the data
        //each table row will be a link, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality, likely just do sort via bootstrap 
    try {
        //WHAT THIS WILL EVENTUALLY HAVE TO DO: handle when we have queried data coming back 
        //search through the queries and find those which match a column name from the 
        const columnNames = Object.keys(Customer.rawAttributes);
        let whereObject = {};
        for (let i=0; i< Object.keys(req.query).length; i++)
        {
            if (columnNames.includes(Object.keys(req.query)[i]))
            {
                whereObject[Object.keys(req.query)[i]] = req.query(Object.keys(req.query)[i]);
            };
        };
        //you will eventually have to rewrite out the where here dynamically
        const foundCustomers = await Customer.findAll({
            where: whereObject,
            attributes: {exclude: ['createdAt', 'updatedAt', 'customer_picture_filename']}
        });
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(foundCustomers);
    } catch (err) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    };
});
//POSTS the new customer creation
//Note: i have not implemented aws file uploading yet, so just remove the filename from the req.body eventually
customers.post('/', async (req, res) => {
    try {
        //TODO back end data validation
        //NOTE: for right now we are just straight up ignoring adding a photo
        //insert into database
        try {
            //remove the filename and photo filename from the body
            let sqlData = req.body;
            let photoName = '';
            let photoData = null;
            // first lets see if they have input a photo. If so, the photo must be added to the aws bucket
            if (Object.keys(req.body).includes('customer_picture_filename'))
            {
                photoName = req.body.product_picture_filename;
                //eventually add in whatever you named the photo data to a var and delete from the req.body
                //delete req.body.product_picture_file;
                delete req.body.customer_picture_filename
                sqlData = req.body; 
            }
            const newCustomer = await Customer.create(sqlData);
            let customer_id =  newCustomer.customer_id;
            //insert photo into AWS bucket iff the db insertion is successful and theres a photo filename
            if (photoName !== '')
            {
                try {
                    //TODO insert into AWS bucket if present
                    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
                    res.status(201). res.status(201).json({message:'totaladdsuccess' , id:customer_id});
                } catch (error) {
                    //remove the pic filename
                    //const removeProductPictureResult = await Product.
                    //if it fails remove the file name from the db and define in the error response
                    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
                    res.status(201).json({message:'addsuccessnophoto' , id:customer_id});
                }
            }
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.status(201).json({message:'totaladdsuccess' , id:customer_id});
        } catch (err) {
            console.error(err);
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.status(500).json(err);
        }
    } catch (err) {
        //do some err
        console.error(err);
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    }
});
//GETS a form for creating a new customer
customers.get('/new', async (req, res) => {
    let formInfo = {}
    //look into the database and find the appropriate fields
    //send over a json of the following structure
    // field name : fieldtype, fieldrequirements (so like if ENUM give it the array), isAllowNull
    Object.keys(Customer.rawAttributes).forEach( key =>{
        let value = null;
        switch (Customer.rawAttributes[key].type.toString())
        {
            case 'DATE':
                value = ['date', []]
                break;
            case 'ENUM':
                value = ['select',  Customer.rawAttributes[key].values];
                break;
            case 'FLOAT':
            case 'INTEGER':
                //check if primary key, break out 
                value = !Customer.rawAttributes[key].primaryKey ? ['number', []] : null; 
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
            value.push(Customer.rawAttributes[key].allowNull === undefined ? true : Customer.rawAttributes[key].allowNull);
            formInfo[key] = value;
        }
    });
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(formInfo);
});

module.exports = customers;