//DEPENDENCIES
const reporting    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer, Delivery_Detail, Delivery, Product } = db;
const { Op }        = require('sequelize');




reporting.get('/customerorders', async (req, res) => {
        //annie Note: you dont need this part, its used only when youre sending a request to filter and or query a result.
        //here the client is never going to send back a query
        const allCustomers = await Customer.findAll({
            attributes: ['customer_id'],
            include:[
            {model: Delivery, as: "deliveries",
                include: {
                    model: Delivery_Detail, as: "delivery_details",attributes: ['quantity', 'product_id'],
                        include:{
                            model: Product, as : "product",
                            attributes: ['product_sale_price']
                        }
            }},
            ]
        });
        // now we map through every customer and find every delivery they have
        const allPurchasesByCustomer = allCustomers.map(customer => {
            //this is what we will return. we sum by constantly adding to indvCustomerObj quantity
            let indvCustomerObj = { customer_id : customer.dataValues.customer_id,
                                    quantityPurchased: 0,
                                    amountSpent      : 0
                                }
            //each customer can have multiple deliveries
            customer.dataValues.deliveries.forEach(delivery => {
                //each delivery can have multiple delivery details
                delivery.dataValues.delivery_details.forEach(delivery_detail => {
                    //lets go and add it to our count
                    indvCustomerObj.quantityPurchased = indvCustomerObj.quantityPurchased + delivery_detail.dataValues.quantity;
                    //thank god delivery detail to product is one to one so we dont need another nested forEach, we just have 
                    //to multiply the quantity by the product sale price
                    indvCustomerObj.amountSpent = indvCustomerObj.amountSpent + (delivery_detail.dataValues.quantity * delivery_detail.dataValues.product.dataValues.product_sale_price);
                })
            });
            //give it back an object of what we care about
            return indvCustomerObj;
        });

        console.log(allPurchasesByCustomer);
});




module.exports = reporting;


