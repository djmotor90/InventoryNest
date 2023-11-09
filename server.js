// DEPENDENCIES
const express       = require('express');
const app           = express();
const { Sequelize } = require('sequelize');
//database connection required on the landing page
const db            = require('./models');
const delivery_detail = require('./models/delivery_detail.js');
const port = 3001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Routes
//STATIC ROUTE FOR THE LANDING PAGE
app.get('/', async (req, res) => {
    try {
        //first get warehouse information for the card and the map
        const wareHouseObj = await db.Warehouse.findAndCountAll({
            attributes: ['warehouse_name', 'warehouse_address', 'warehouse_city', 'warehouse_state', 'warehouse_zipcode']
        });
        //next get sales information both for cards and for the scatterplot
        const salesData = await db.Delivery.findAll({
            attributes: ['delivery_date'],
            include:[
                { model: db.Delivery_Detail, as: "delivery_details", 
                  attributes: ['quantity', 'total_price']
                }
            ]
        });
        //loop through to get card information, namely the salescount and sales revenue
        let salesCount = 0;
        let salesRevenue =0;
        //stores a date and the sales revenue on each day
        scatterObject = {};
        for (let i=0; i< salesData.length; i++)
        {
            let deliveryDate = salesData[i].dataValues.delivery_date;
            let deliveryDetailArray = salesData[i].dataValues.delivery_details
            for (let j=0; j<deliveryDetailArray.length;j++)
            {
                //for the cards
                let quantity = deliveryDetailArray[j].dataValues.quantity;
                let totalPrice = deliveryDetailArray[j].dataValues.total_price;
                salesCount = salesCount + quantity;
                salesRevenue = salesRevenue + totalPrice;
                //for the scatterplot
                if (scatterObject[deliveryDate])
                {
                    console.log('here')   
                    scatterObject[deliveryDate] = totalPrice + scatterObject[deliveryDate]; 
                }
                else
                {
                    scatterObject[deliveryDate] = totalPrice;
                }
            }
        };
        //get all the customers
        const customerCount = await db.Customer.count();
        //get 3 most recent transfers and get their date, to, and from
        const transferData = await db.Transfer.findAll({
            attributes: ['transfer_date'],   
            include: [
                {model: db.Warehouse, as: 'warehouse_from', attributes: ['warehouse_name']}, 
                {model: db.Warehouse, as: 'warehouse_to', attributes: ['warehouse_name']}
            ],
            limit:3,
            order: [['transfer_date', 'ASC']]
        });
        //want a count of the total number of sales, warehouses, and customers
        let cardInformation = {
            customerCount  : customerCount,
            warehouseCount : wareHouseObj.count,
            salesCount     : salesCount,
            revenueCount   : salesRevenue
        }
        //final data push
        const landingPageData = {
            cardInformation     : cardInformation,
            transferInformation : transferData,
            scatterInformation  : scatterObject,
            mapInformation      : wareHouseObj.rows
        }
        res.status(200).json(landingPageData);
    } catch (error) {
        res.status(500).json(err);
    }
});
//DYNAMIC ROUTES 

app.use('/products', require('./controllers/products.js'));
app.use('/customers', require('./controllers/customers.js'));
app.use('/warehouses', require('./controllers/warehouses.js'));
app.use('/reporting', require('./controllers/reporting.js'))


//CATCHALL ROUTE
app.get('*', (req,res) => {
    response.status(404).json({message: 'Page not found'});
});



// LISTEN
app.listen(port, () => {
    console.log(`InventoryNest app listening at http://localhost:${port}`);
});