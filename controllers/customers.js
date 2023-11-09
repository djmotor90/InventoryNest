//DEPENDENCIES
const customers    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer } = db;
const { Op }        = require('sequelize');

//table of all the customers






module.exports = customers;