// reporting.js

const express = require('express');
const router = express.Router();
const db = require('../models');
const { Product, Owner, Customer, Delivery, Delivery_Detail } = db; // Import the necessary models
const { Op, sequelize } = require('sequelize');

// Get all owners
router.get('/', async (req, res) => { // Change the path to '/owners'
  try {
    // Search through the queries and find those which match a column name from the 
    const columnNames = Object.keys(Owner.rawAttributes);
    let whereObject = {};
    for (let i = 0; i < Object.keys(req.query).length; i++) {
      if (columnNames.includes(Object.keys(req.query)[i])) {
        whereObject[Object.keys(req.query)[i]] = req.query(Object.keys(req.query)[i]);
      }
    }
    // You will eventually have to rewrite out the where here dynamically
    const foundOwners = await Owner.findAll({
      where: whereObject,
    });
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(foundOwners);
  } catch (err) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(500).json(err);
  }
});

// Get all products
router.get('/products', async (req,res) => { // Change the path to '/products'
    // Show a table of all products, therefore need to send over all the data
        //each table row will be a link, that will feed in the id 
    // needed associations: none afaik 
    //there will be querying functionality and sorting functionality, likely just do sort via bootstrap 
    try {
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
        const foundProducts = await Product.findAll({
            where: whereObject,
            attributes: {exclude: ['createdAt', 'updatedAt', 'product_picture_filename']}
        });
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(foundProducts);
    } catch (err) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    };
});

// Get all customers
router.get('/customers', async (req, res) => {
    try {
      // Search through the queries and find those which match a column name from the customer model
      const columnNames = Object.keys(Customer.rawAttributes);
      let whereObject = {};
      for (let i = 0; i < Object.keys(req.query).length; i++) {
        if (columnNames.includes(Object.keys(req.query)[i])) {
          whereObject[Object.keys(req.query)[i]] = req.query(Object.keys(req.query)[i]);
        }
      }
  
      // Query the customers based on the specified conditions
      const foundCustomers = await Customer.findAll({
        where: whereObject,
      });
  
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(foundCustomers);
    } catch (err) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
    }
  });

  // Get customer orders
// router.get('/customerorders', async (req, res) => {
//     try {
//       const customers = await Customer.findAll();
  
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(200).json(customers);
//     } catch (err) {
//       console.error(err); // Log any errors to the console for debugging
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(500).json(err);
//     }
//   });
  


// Get customer data along with associated deliveries
// router.get('/customerorders', async (req, res) => {
//     try {
//       // Search through the queries and find those which match a column name from the customer model
//       const columnNames = Object.keys(Customer.rawAttributes);
//       let whereObject = {};
//       for (let i = 0; i < Object.keys(req.query).length; i++) {
//         if (columnNames.includes(Object.keys(req.query)[i])) {
//           whereObject[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]]; // Fix this line
//         }
//       }
  
//       // Include the 'deliveries' association to fetch delivery data for each customer
//       const foundCustomers = await Customer.findAll({
//         where: whereObject,
//         include: [
//           {
//             model: Delivery,
//             as: 'deliveries',
//             include: [{ model: Delivery_Detail, as: 'delivery_details' }],
//           },
//         ],
//       });
  
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(200).json(foundCustomers);
//     } catch (err) {
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(500).json(err);
//     }
//   });
















// Get customer data along with associated deliveries and total quantity
// router.get('/customerorders', async (req, res) => {
//     try {
//       // Search through the queries and find those which match a column name from the customer model
//       const columnNames = Object.keys(Customer.rawAttributes);
//       let whereObject = {};
//       for (let i = 0; i < Object.keys(req.query).length; i++) {
//         if (columnNames.includes(Object.keys(req.query)[i])) {
//           whereObject[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]];
//         }
//       }
  
//       // Include the 'deliveries' association to fetch delivery data for each customer
//       const foundCustomers = await Customer.findAll({
//         where: whereObject,
//         attributes: ['customer_first_name', 'customer_last_name'], // Select only the desired attributes
//         include: [
//           {
//             model: Delivery,
//             as: 'deliveries',
//             include: [
//               {
//                 model: Delivery_Detail,
//                 as: 'delivery_details',
//                 attributes: [
//                   [sequelize.fn('sum', sequelize.col('quantity')), 'total_quantity'],
//                 ],
//               },
//             ],
//           },
//         ],
//       });
  
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(200).json(foundCustomers);
//     } catch (err) {
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(500).json(err);
//     }
//   });
  
  
  

  
  
  
//   // Get customer data along with associated deliveries
// router.get('/customerorders', async (req, res) => {
//     try {
//       // Search through the queries and find those which match a column name from the customer model
//       const columnNames = Object.keys(Customer.rawAttributes);
//       let whereObject = {};
//       for (let i = 0; i < Object.keys(req.query).length; i++) {
//         if (columnNames.includes(Object.keys(req.query)[i])) {
//           whereObject[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]]; // Fix this line
//         }
//       }
  
//       // Include the 'deliveries' association to fetch delivery data for each customer
//       const foundCustomers = await Customer.findAll({
//         where: whereObject,
//         attributes: ['customer_first_name', 'customer_last_name'],
//         include: [
//           {
//             model: Delivery,
//             as: 'deliveries',
//             attributes: ['delivery_id'],
//             include: [
//                 { 
//                     model: Delivery_Detail, 
//                     as: 'delivery_details', 
//                     attributes: ['quantity']
//                 }],
//           },
//         ],
//       });
  
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(200).json(foundCustomers);
//     } catch (err) {
//       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.status(500).json(err);
//     }
//   });



// Get customer data along with the sum of quantities for each customer
router.get('/customerorders', async (req, res) => {
    try {
      // Search through the queries and find those which match a column name from the customer model
      const columnNames = Object.keys(Customer.rawAttributes);
      let whereObject = {};
      for (let i = 0; i < Object.keys(req.query).length; i++) {
        if (columnNames.includes(Object.keys(req.query)[i])) {
          whereObject[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]]; // Fix this line
        }
      }
  
      // Include the 'deliveries' association to fetch delivery data for each customer
      const foundCustomers = await Customer.findAll({
        where: whereObject,
        attributes: ['customer_first_name', 'customer_last_name'],
        include: [
          {
            model: Delivery,
            as: 'deliveries',
            attributes: [],
            include: [
              {
                model: Delivery_Detail,
                as: 'delivery_details',
                attributes: [
                  [sequelize.fn('SUM', sequelize.col('quantity')), 'total_quantity'],
                ],
              },
            ],
          },
        ],
        
      });
  
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(foundCustomers);
    } catch (err) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
    }
  });
  
  
  
  

  
  
module.exports = router;
