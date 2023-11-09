//DEPENDENCIES
const customers    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer } = db;
const { Op }        = require('sequelize');

//STATIC ROUTES
//Home route: simply needs to send over all table data to populate a table
// get all customers and send a json
// get information for single customer and populate with their deliveries
// delete, add, etc





module.exports = customers;