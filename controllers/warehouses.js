//DEPENDENCIES
const warehouses                         = require('express').Router();
const db                                 = require('../models');
const { Warehouse, Inventory, Product, Customer, Delivery_Details }  = db;
const { Op }                             = require('sequelize');
//for converting an address to latlong
const { calcCrowDistance }               = require('../locationFunctions.js');
const nodeGeocoder                       = require('node-geocoder');
    //initializing the geocoder using my google free tier key
const geocoder = nodeGeocoder({provider: 'google',apiKey: process.env.ADDRESS_API_KEY, formatter: null});



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
        let whereObject = { isSoftDeleted : {[Op.eq]: null}};
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
            attributes: {exclude: ['createdAt', 'updatedAt', 'isSoftDeleted']}
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
        res.status(201).json({message:'totaladdsuccess' , id: warehouse_id});
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
//Get individual route: shows the information about a singular warehouse, allows you to transfer products between warehouses or purchase more 
// of one product to the warehouse
warehouses.get('/:id', async (req,res) => {
    try {
        //provide every product within an individual warehouse as well
        const foundWarehouse = await Warehouse.findOne({
            where: {warehouse_id: req.params.id},
            attributes: {exclude: ['createdAt', 'updatedAt','isSoftDeleted']},
            include:[
                {model: Inventory, as: "inventories", attributes: {exclude: ['createdAt', 'updatedAt']},
                    include: {
                        model: Product, as: "product", attributes: {exclude: ['createdAt', 'updatedAt', 'product_picture_filename', 'isSoftDeleted']}
                }},
            ]
        });
        //seperate what is sent into a form
        //show form only holds the product tables info, so remove all populated data
        const showFormInfo = {list : {}};
        for (let i=0; i< Object.keys(foundWarehouse.dataValues).length; i++ ){
            //this takes out anything thats an array or object, so we are taking out the populations
            if (typeof foundWarehouse.dataValues[Object.keys(foundWarehouse.dataValues)[i]] !== 'object')
            {
                //for the sake of standardizing this card for the frontend for warehouses and customers, define the pic information and the 
                //name information and the description (textarea) if it exists
                switch (Object.keys(foundWarehouse.dataValues)[i])
                {
                    case 'warehouse_name':
                        showFormInfo.name = foundWarehouse.dataValues[Object.keys(foundWarehouse.dataValues)[i]];
                        break;
                    //case 'warehouse_description':
                    //    showFormInfo.description = foundWarehouse.dataValues[Object.keys(foundProduct.dataValues)[i]];
                    //    break;
                    case 'warehouse_id':
                        showFormInfo.id = foundWarehouse.dataValues[Object.keys(foundWarehouse.dataValues)[i]];
                        break;
                    default:
                        showFormInfo.list[Object.keys(foundWarehouse.dataValues)[i]] = foundWarehouse.dataValues[Object.keys(foundWarehouse.dataValues)[i]];
                };
            }
        };
        //for now lets make the description just a blank field
        showFormInfo.description = '';
        //NOTE in our card we have a spot for pictures, but we dont have any picture for the warehouse, so instead im finding the 
        //lat long then sending that to the front end to make a google map component
        try {
            const geolocatedObj = await geocoder.geocode(foundWarehouse.dataValues.warehouse_address);
            showFormInfo.picture = [geolocatedObj[0].latitude, geolocatedObj[0].longitude];
        } catch (err) {
            //this is probably going to happen if its an invalid address
            console.log(err)
            showFormInfo.picture = null;
        }
        const geolocatedObj = await geocoder.geocode(foundWarehouse.dataValues.warehouse_address);
        showFormInfo.picture = [geolocatedObj[0].latitude, geolocatedObj[0].longitude];

       //first extract all information to make a table of all products currently present in a warehouse
        const productTableInfo = [];
        for (let i=0; i< foundWarehouse.inventories.length; i++)
        {
            productTableInfo.push(foundWarehouse.inventories[i].product.dataValues);
            //add in the stock amount
            productTableInfo[i].current_stock_level =   foundWarehouse.inventories[i].dataValues.current_stock_level;
        };
        //REPORTING CARD INFORMATION
        // Most common item type in a warehouse, customers in 100 mile radius, deliveries from this warehouse count, deliveries in past 10 days
        let showAnalyticsInfo = {
            list: {
                total_items_stored         : 0,
                most_common_item_type      : '',
                total_deliveries           : 0,
            },
            barData               : {}
        };
        //lets first compare coords and find the nearest 5 customers
        const allCustomers = await Customer.findAll({});
        let warehouseCoords = [geolocatedObj[0].latitude, geolocatedObj[0].longitude];
        //first make an array of addresses
        //40 customers
        //write a page load
        let allCustomerCoords = [];
        for (let i=0; i< allCustomers.length; i++){
            let customerName = `${allCustomers[i].dataValues.customer_first_name} ${allCustomers[i].dataValues.customer_last_name}`;
            let geoLocatedCustomer = await geocoder.geocode(allCustomers[i].dataValues.customer_address);
            let customerCoords = [geoLocatedCustomer[0].latitude, geoLocatedCustomer[0].longitude];
            let distance = calcCrowDistance(warehouseCoords[0], warehouseCoords[1], customerCoords[0], customerCoords[1]);
            allCustomerCoords.push({customerName: customerName, distance: distance});
        };
        //Now we have to sort all Customer Coords
        let sortedDistanceArray = allCustomerCoords.sort(({distance:a}, {distance:b}) => a-b);
        //and insert the top 5
        showAnalyticsInfo.list.nearest_5_customers = sortedDistanceArray[0].customerName;
        for (let i=1; i< 5; i++){
            showAnalyticsInfo.list.nearest_5_customers = `${showAnalyticsInfo.list.nearest_5_customers}, ${sortedDistanceArray[i].customerName}` 
        };
        //Next lets look through the inventory and find the most common item type and the total number of items stored here
        let categoriesStored = {};
        foundWarehouse.dataValues.inventories.forEach(inventory => {
            showAnalyticsInfo.list.total_items_stored += inventory.dataValues.current_stock_level;
            if(categoriesStored[inventory.dataValues.product.dataValues.product_category]){
                categoriesStored[inventory.dataValues.product.dataValues.product_category] += inventory.dataValues.current_stock_level;
            }else{
                categoriesStored[inventory.dataValues.product.dataValues.product_category] = inventory.dataValues.current_stock_level;
            }  
        });
        //lets find the largest category bought
        //NOTE this doesnt handle ties yet
        //NOTE: this takes too long, taking out for now
        /*mostStoredAmount = 0
        mostStoredCategory = '';
        for (let i=0; i<Object.keys(categoriesStored).length; i++){
            if(categoriesStored[Object.keys(categoriesStored)[i]] > mostStoredAmount){
                mostBoughtAmount = categoriesStored[i];
                mostStoredCategory = Object.keys(categoriesStored)[i];
            }
        };
        showAnalyticsInfo.list.most_common_item_type = mostStoredCategory;
        */
        //Now lets get the number of delivieries filfilled from this warehouse
        //const allDeliveryDeets 
        //const allDeliveryDetails = await Delivery_Details.findAll({where: {warehouse_id : req.params.id}})
        
        /*
        //Now lets get the quantity of items bought the past 10 days for the bar graph
        let tendaysAgoDate = new Date(new Date().setHours(0,0,0,0) - ((24*60*60*1000) * 10)); 
        const allPurchasesPast10Days = await Delivery.findAll({
            attributes: ['delivery_date', 'customer_id'],
            include:{ model: Delivery_Detail, as: "delivery_details", attributes: ['quantity']},
            where: {
                delivery_date: {
                    [Op.gte]: [tendaysAgoDate.toISOString()]
                }
            }
        });
        let barObj = {}
        for (let i=0; i< 10; i++)
        {
            let date =  new Date(new Date().setHours(0,0,0,0) - ((24*60*60*1000)*i)).toString().substring(0, 10)
            barObj[date] = 0
        } 
         //now we need to get only the ones with this specific product
         allPurchasesPast10Days.forEach(delivery => {
            if (delivery.dataValues.customer_id === parseInt(req.params.id)){
                    //get the date of this delivery
                    let wmd = delivery.dataValues.delivery_date.toString().substring(0, 10);
                    //look at all the delivery details
                    let quantityBought = 0;
                    delivery.dataValues.delivery_details.forEach( delivery_detail => {
                        quantityBought += delivery_detail.dataValues.quantity;
                    });
                    //now add quantity to your bar graph obj
                    barObj[wmd] += quantityBought;
            };
        });
        showAnalyticsInfo.barData = barObj;
        */
        const sentData = {
            showFormInfo      : showFormInfo,
            associateTable    : productTableInfo,
            showAnalyticsInfo : showAnalyticsInfo
            //purchaseForm   : purchaseTransferForm
        };
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(sentData);
    } catch (err) {
        console.log(err)
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err)
    }
});
//Get edit form route: creates an edit form for an individual warehouse
warehouses.get('/:id/edit', async (req,res) => {
    //TODO: change forminput to an object of objects, lacking keynames is confusing, do above for new too
    try {
        //first query the database to get your full product information, this will be the 4th value of every child forminfo object
        const foundWarehouse = await Warehouse.findOne({
            where: {warehouse_id: req.params.id},
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        let formInfo = {}
        //look into the database and find the appropriate fields
        //send over a json of the following structure
        // field name : fieldtype, fieldrequirements (so like if ENUM give it the array), isAllowNull, CURRENT VALUE
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
                value.push(Warehouse.rawAttributes[key].allowNull === undefined ? true : Warehouse.rawAttributes[key].allowNull);
                formInfo[key] = value;
                //push in preexisting values
                value.push(foundWarehouse.dataValues[key]);
            }
        });
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(formInfo);
    } catch (err) {
        console.log(err)
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err)
    }
});
//This handles updating any individual warehouse
warehouses.put('/:id', async(req,res) => {
    //here you should do backend validation 
    //NOTE: right now we have nothing even trying to handle picture insertions, we are just straight putting in the filename
    const warehouseToUpdate = await Warehouse.findOne({
        where:{
            warehouse_id:req.params.id
        }
    });
    await warehouseToUpdate.update(req.body);
    await warehouseToUpdate.save()
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).json({message:'Your Edit Was Successful', id: req.params.id});
});
warehouses.post('/:id', async(req,res) => {

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