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
            where: {product_id: req.params.id},
            attributes: {exclude: ['createdAt', 'updatedAt']},
            include:[
                {model: Inventory, as: "inventories", attributes: {exclude: ['createdAt', 'updatedAt']},
                    include: {
                        model: Product, as: "product", attributes: {exclude: ['createdAt', 'updatedAt']}
                }},
            ]
        });
        //seperate what is sent into a form
        //show form only holds the product tables info, so remove all populated data
        const showFormInfo = {list : {}};
        for (let i=0; i< Object.keys(foundProduct.dataValues).length; i++ ){
            //this takes out anything thats an array or object, so we are taking out the populations
            if (typeof foundProduct.dataValues[Object.keys(foundProduct.dataValues)[i]] !== 'object')
            {
                //for the sake of standardizing this card for the frontend for warehouses and customers, define the pic information and the 
                //name information and the description (textarea) if it exists
                switch (Object.keys(foundProduct.dataValues)[i])
                {
                    case 'warehouse_name':
                        showFormInfo.name = foundWarehouse.dataValues[Object.keys(foundWarehouse.dataValues)[i]];
                        break;
                    case 'warehouse_description':
                        showFormInfo.description = foundProduct.dataValues[Object.keys(foundProduct.dataValues)[i]];
                        break;
                    case 'warehouse_id':
                        showFormInfo.id = foundProduct.dataValues[Object.keys(foundProduct.dataValues)[i]];
                        break;
                    default:
                        showFormInfo.list[Object.keys(foundProduct.dataValues)[i]] = foundProduct.dataValues[Object.keys(foundProduct.dataValues)[i]];
                };
            }
        }
        //NOTE DEFINE HERE INSTEAD OF THE PICTURE THE LAT LONG OF THE WAREHOUSE



        //Luckily, a warehouse can only ever have one inventory record per product
        // so define it as warehouse_id : {key:val}...
        // the logic of the front end is it takes in a object of {}
        //first we check if there are any warehouses with this product via the inventories
        const wareHouseTableInfo = [];
        for (let i=0; i< foundProduct.inventories.length; i++)
        {
            wareHouseTableInfo.push(foundProduct.inventories[i].warehouse.dataValues);
            //add in the stock amount
            wareHouseTableInfo[i].current_stock_level =   foundProduct.inventories[i].dataValues.current_stock_level;
        };
        //for both a purchase and transfer form we need every single warehouse
        //why dont we give name (state)
        //realistically we should get the capacity but i dont have time to do this check in the end 
        //also include how much of that item the warehouse currently has 
        const allWarehouses = await Warehouse.findAll({
            attributes: ['warehouse_id', 'warehouse_name', 'warehouse_state'],
        });
        //lets put this together such that we have 1:warehouse_id, 'warehouse_name,'warehouse_state','current_stock_level' = 0 if none
        //NOTE this says when i do typeof its an object but i can do array methods, what is this?
        //lets get from above all warehouses with product in it, lets get their id
        let warehousesWithProductIds = {};
        wareHouseTableInfo.forEach(warehouse => {
            warehousesWithProductIds[warehouse.warehouse_id] = warehouse.current_stock_level
        });
        Object.keys(allWarehouses).forEach((warehouseKey) => {
            //check if the warehouse id is in the withproduct obj we made above, if so throw it the currentstockval
            if (Object.keys(warehousesWithProductIds).includes(  allWarehouses[warehouseKey].warehouse_id.toString())){
                //theres got to be a better way but im looping through and dynamically assinging the formatted one. I tried just directly adding 
                // to the all warehouses but wasnt working
                
                allWarehouses[warehouseKey].dataValues.current_stock_level = warehousesWithProductIds[allWarehouses[warehouseKey].warehouse_id];
            }
            else{
                allWarehouses[warehouseKey].dataValues.current_stock_level = 0;
            }
        });
        //For purchasing you also need to know how much money our main user has 
        const ownerMoneyQuery = await Owner.findOne({
            // we always use the first user
            where: [{owner_id : 1}],
            attributes:[ 'starting_money','total_expenditures', 'total_revenue']
        });
        let ownerMoney = ownerMoneyQuery.starting_money - ownerMoneyQuery.total_expenditures + ownerMoneyQuery.total_revenue;
        //what we need here: we need allwarehouses and ownermoney
        const  purchaseTransferForm = {
            allWarehouses : allWarehouses,
            ownerMoney : ownerMoney,
        };
        const sentData = {
            showFormInfo   : showFormInfo,
            associateTable : wareHouseTableInfo,
            purchaseForm   : purchaseTransferForm
        };

        /////Rhionna we are starting here to make the product performance analytics 
        //things we need: the total quantity of products across all inventories
        //                the total number of sales this product has had 
        //                the return from stock price versus sell price
        //                the location in which it is most successfull
        //                a graph that shows over the post 30 days when it has been purchased
        analyticsObject = {
            quantity:0,
            quantitySold: 0,

        };
        foundProduct.dataValues.inventories.forEach((inventory) => {
            //this is may mapping function
            analyticsObject.quantity =  analyticsObject.quantity + inventory.dataValues.current_stock_level;
        })//accepts a callback)
        const foundDeliveries = await Delivery_Detail.findAll({
            where: {product_id: req.params.id},
            attributes: ['quantity'],
        });
        foundDeliveries.forEach((delivery) => {
            //this is may mapping function
            analyticsObject.quantitySold =  analyticsObject.quantitySold + delivery.dataValues.quantity;
        })
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(sentData);
    } catch (err) {
        console.log(err)
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err)
    }
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