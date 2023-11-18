// DEPENDENCIES
const express       = require('express');
const app           = express();
const { Sequelize } = require('sequelize');
const { Op }        = require('sequelize');
//Annie note: instead do indivudual res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); for every route, works more consistently
const cors          = require('cors');
//database connection required on the landing page
const db            = require('./models');
//Port/Service Variables
const port          = 3001;


// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//AWS BUCKET CONNECTION //
const { uploadFile, getFileStream } = require('./s3')


//Routes
//STATIC ROUTE FOR THE LANDING PAGE or general things
//any time we fetch an image we use this route
app.get('/images/:key', (req, res) => {
    //the key will be the name of the file in aws with its file shorcut
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
  });

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
        for (let i=0; i< salesData.length; i++)
        {
            let deliveryDetailArray = salesData[i].dataValues.delivery_details
            for (let j=0; j<deliveryDetailArray.length;j++)
            {
                //for the cards
                let quantity = deliveryDetailArray[j].dataValues.quantity;
                let totalPrice = deliveryDetailArray[j].dataValues.total_price;
                salesCount = salesCount + quantity;
                salesRevenue = salesRevenue + totalPrice;
            }
        };
        //Now query the delivery details for sales that occured withing the last 10 days
        let tendaysAgoDate = new Date(new Date().setHours(0,0,0,0) - ((24*60*60*1000) * 10)); 
        const barData = await db.Delivery.findAll({
            attributes: ['delivery_date'],
            include:[
                { model: db.Delivery_Detail, as: "delivery_details", 
                  attributes: ['total_price']
                }
            ],
            where: {
                delivery_date: {
                  [Op.gte]: [tendaysAgoDate.toISOString()]
                }
            }
        });
        //since there are likely days w 0 sales, lets make the keys ourselves
        let barObj = {}
        for (let i=0; i< 10; i++)
        {
            let date =  new Date(new Date().setHours(0,0,0,0) - ((24*60*60*1000)*i)).toString().substring(0, 10)
            barObj[date] = 0
        }

        for (let i=0; i< barData.length; i++)
        {
            let wmd = barData[i].delivery_date.toString().substring(0, 10);
            //now find all the delivery details associated with this entry
            for (let j=0; j< barData[i].delivery_details.length; j++)
            {
                barObj[wmd] += barData[i].delivery_details[j].total_price
            }
        }
        //get all the customers
        const customerCount = await db.Customer.count();
        //get 3 most recent transfers and get their date, to, and from
        const transferData = await db.Transfer.findAll({
            attributes: ['transfer_date'],   
            include: [
                {model: db.Warehouse, as: 'warehouse_from', attributes: ['warehouse_name', 'warehouse_id']}, 
                {model: db.Warehouse, as: 'warehouse_to', attributes: ['warehouse_name', 'warehouse_id']},
                {model: db.Product, as: 'product', attributes: ['product_name', 'product_id']}
            ],
            limit:3,
            order: [['transfer_date', 'DESC']]
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
            barInformation      : barObj,
            mapInformation      : wareHouseObj.rows
        }
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(landingPageData);
    } catch (err) {
        //TODO eventually write in some error handles, also include some more trycatches above to control certain erros
        console.log(err);
        res.status(500).json(err);
    }
});
//STATIC ROUTE FOR THE NAVBAR
app.get('/navbar', async(req,res) => {
try {
    //NOTE: at the moment we are assuming there is one owner only and we dont ever delete it 
    const ownerData = await db.Owner.findOne({
        where: {owner_id: 1},
        attributes: ['owner_first_name', 'owner_last_name']
    });
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(ownerData);
} catch (err) {
    console.log(err);
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
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.status(404).json({message: 'Page not found'});
});



// LISTEN
app.listen(port, () => {
    console.log(`InventoryNest app listening at http://localhost:${port}`);
});