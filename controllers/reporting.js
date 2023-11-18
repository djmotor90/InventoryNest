// reporting.js
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Product, Owner, Customer, Delivery, Delivery_Detail, Warehouse, Transfer } = db; // Import the necessary models
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

 // Get customer orders with total quantities and amount spent
 router.get('/customerorders', async (req, res) => {
    try {
        const allCustomers = await Customer.findAll({
            include: [
                {
                    model: Delivery,
                    as: "deliveries",
                    include: {
                        model: Delivery_Detail,
                        as: "delivery_details",
                        attributes: ['quantity', 'product_id'],
                        include: {
                            model: Product,
                            as: "product",
                            attributes: ['product_sale_price']
                        }
                    },
                },
            ],
        });

        const allPurchasesByCustomer = allCustomers.map(customer => {
            let indvCustomerObj = {
                customer_id: customer.customer_id,
                customer_first_name: customer.customer_first_name,
                customer_last_name: customer.customer_last_name,
                customer_address: customer.customer_address,
                customer_city: customer.customer_city,
                customer_state: customer.customer_state,
                customer_zipcode: customer.customer_zipcode,
                customer_picture_filename: customer.customer_picture_filename,
                isSoftDeleted: customer.isSoftDeleted,
                quantityPurchased: 0,
                amountSpent: 0
            };

            customer.deliveries.forEach(delivery => {
                delivery.delivery_details.forEach(delivery_detail => {
                    indvCustomerObj.quantityPurchased += delivery_detail.quantity;
                    indvCustomerObj.amountSpent += delivery_detail.quantity * delivery_detail.product.product_sale_price;
                });
            });

            return indvCustomerObj.quantityPurchased > 0 ? indvCustomerObj : null;
        }).filter(Boolean); // Remove null values

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(allPurchasesByCustomer);
    } catch (err) {
        console.error(err);
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(500).json(err);
    }
});

// Get all warehouses
router.get('/warehouses', async (req, res) => {
  try {
      const allWarehouses = await Warehouse.findAll({
          include: [
              {
                  model: Transfer,
                  as: 'transfers_to',
                  include: [{ model: Product, as: 'product' }]
              },
              {
                  model: Transfer,
                  as: 'transfers_from',
                  include: [{ model: Product, as: 'product' }]
              }
          ]
      });

      const warehousesWithMetrics = allWarehouses.map(warehouse => {
          let totalProductsTransferredTo = 0;
          let totalProductsTransferredFrom = 0;
          let totalTransferAmountTo = 0;
          let totalTransferAmountFrom = 0;

          warehouse.transfers_to.forEach(transfer => {
              totalProductsTransferredTo += transfer.transfer_amount;
              totalTransferAmountTo += transfer.transfer_amount * transfer.product.product_sale_price;
          });

          warehouse.transfers_from.forEach(transfer => {
              totalProductsTransferredFrom += transfer.transfer_amount;
              totalTransferAmountFrom += transfer.transfer_amount * transfer.product.product_sale_price;
          });

          // Only return the specific fields you want along with the metrics
          return {
              warehouse_id: warehouse.warehouse_id,
              warehouse_name: warehouse.warehouse_name,
              warehouse_description: warehouse.warehouse_description,
              warehouse_address: warehouse.warehouse_address,
              warehouse_city: warehouse.warehouse_city,
              warehouse_state: warehouse.warehouse_state,
              warehouse_zipcode: warehouse.warehouse_zipcode,
              warehouse_capacity: warehouse.warehouse_capacity,
              isSoftDeleted: warehouse.isSoftDeleted,
              createdAt: warehouse.createdAt,
              updatedAt: warehouse.updatedAt,
              totalProductsTransferredTo,
              totalProductsTransferredFrom,
              totalTransferAmountTo,
              totalTransferAmountFrom
          };
      });

      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(warehousesWithMetrics);
  } catch (err) {
      console.error(err);
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
  }
});
 
  router.get('/:id', async (req, res) => {
    try {
      const ownerId = req.params.id;
  
      // Find the owner by ID
      const owner = await Owner.findByPk(ownerId);
  
      if (!owner) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        return res.status(404).json({ message: 'Owner not found' });
      }
  
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(owner);
    } catch (err) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
    }
  });
  
  // Get a product by ID
  router.get('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
  
      // Find the product by ID
      const product = await Product.findByPk(productId);
  
      if (!product) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(product);
    } catch (err) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
    }
  });
  
  // Get a customer by ID
  router.get('/customers/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
  
      // Find the customer by ID
      const customer = await Customer.findByPk(customerId);
  
      if (!customer) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(customer);
    } catch (err) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(500).json(err);
    }
  });
 
module.exports = router;