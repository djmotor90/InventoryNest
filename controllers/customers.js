//DEPENDENCIES
const customers    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer, Delivery, Delivery_Detail, Product, Warehouse } = db;
const { Op }        = require('sequelize');
const delivery_detail = require('../models/delivery_detail');


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
        //make sure to automatically not include the soft deleted entries
        let whereObject = { isSoftDeleted : {[Op.eq]: null}};
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
            attributes: {exclude: ['createdAt', 'updatedAt', 'customer_picture_filename', 'isSoftDeleted']}
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
customers.get('/sales', async (req,res) => {
    const foundSales = await Delivery.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
    });
    foundSales.forEach(delivery =>{
        delivery.dataValues.delivery_date = delivery.dataValues.delivery_date.toString().substring(0, 10) 
    })
     
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.status(200).json(foundSales);
});

//GETS the information and analytics on one customer. Also will send over the needed data for a purchase form
customers.get('/:id', async (req,res) => {
    try {
        //provide every warehouse as well that it is located in and the amount
        const foundCustomer = await Customer.findOne({
            where: {customer_id: req.params.id},
            attributes: {exclude: ['createdAt', 'updatedAt', 'isSoftDeleted']},
            include:[
                    {model: Delivery, as: "deliveries",
                    attributes:['delivery_date'],
                    include: {
                        model: Delivery_Detail, as: "delivery_details",attributes: ['quantity', 'total_price'],
                            include:[{model: Product, as: "product",attributes: ['product_name']},
                                     {model: Warehouse, as: "warehouse", attributes: ['warehouse_name', 'warehouse_state']},
                        ]}},
                ]
        });
        //seperate what is sent into a form
        //show form only holds the product tables info, so remove all populated data
        const showFormInfo = {list : {}};
        for (let i=0; i< Object.keys(foundCustomer.dataValues).length; i++ ){
            //this takes out anything thats an array or object, so we are taking out the populations
            if (typeof foundCustomer.dataValues[Object.keys(foundCustomer.dataValues)[i]] !== 'object')
            {
                //for the sake of standardizing this card for the frontend for warehouses and customers, define the pic information and the 
                //name information and the description (textarea) if it exists
                switch (Object.keys(foundCustomer.dataValues)[i])
                {
                    case 'customer_first_name':
                        showFormInfo.name = `${foundCustomer.dataValues[Object.keys(foundCustomer.dataValues)[i]]} ${foundCustomer.dataValues.customer_last_name}`;
                        break;
                    case 'customer_last_name':
                        break;
                    case "customer_picture_filename":
                        showFormInfo.picture = foundCustomer.dataValues[Object.keys(foundCustomer.dataValues)[i]];
                        break;
                    case 'customer_description':
                        //!SECTION TODO: DOESNT EXIST YET, COULD LATER PUT IN ANALYTICS or something
                        showFormInfo.description = '';
                        break;
                    case 'customer_id':
                        showFormInfo.id = foundCustomer.dataValues[Object.keys(foundCustomer.dataValues)[i]];
                        break;
                    default:
                        showFormInfo.list[Object.keys(foundCustomer.dataValues)[i]] = foundCustomer.dataValues[Object.keys(foundCustomer.dataValues)[i]];
                };
            }
        };
        //for customers, we want to return a table of every delivery they have made, where you have one delivery per row, and you can click 
        // it to show the filled in delivery details 
        // table row: delivery date, number of product types, total money spent, number of warehouses purchased from
        const purchasesTableInfo = [];
        foundCustomer.dataValues.deliveries.forEach((delivery, i) => {
            //i could do this with reduce but will do that later when i refactor
            let ammountSpent = 0;
            let allProducts = [];
            delivery.dataValues.delivery_details.forEach(delivery_detail => {
                ammountSpent += delivery_detail.dataValues.total_price;
                let individualPrice = (delivery_detail.dataValues.total_price/delivery_detail.dataValues.quantity).toFixed(2);
                allProducts.push(`${delivery_detail.dataValues.product.dataValues.product_name} (${delivery_detail.dataValues.quantity} at $${individualPrice} a piece) from ${delivery_detail.dataValues.warehouse.dataValues.warehouse_name}`);
            });
            //another example where im sure reduce could solve my problem
            let uniqueWarehouses = [];
            delivery.dataValues.delivery_details.forEach(delivery_detail => {
                if (!uniqueWarehouses.includes(delivery_detail.dataValues.warehouse.dataValues.warehouse_name)){
                    uniqueWarehouses.push(delivery_detail.dataValues.warehouse.dataValues.warehouse_name)
                }
            });
            //assign your table information
            let entry = {};
            //TODO convert date to a more readable format
            entry.delivery_date = delivery.dataValues.delivery_date;
            entry.different_product_types = delivery.dataValues.delivery_details.length;
            entry.total_spent  = ammountSpent;
            //check if each delivery detail has a unique warehouse
            entry.total_warehouses =  uniqueWarehouses.length;
            //make this as a list in the frontend
            entry.delivery_information  = allProducts;
            purchasesTableInfo.push(entry);
        });
        const sentData = {
            showFormInfo   : showFormInfo,
            associateTable : purchasesTableInfo,
        };

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(sentData);
    } catch (err) {
        console.log(err)
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err)
    }
});







module.exports = customers;