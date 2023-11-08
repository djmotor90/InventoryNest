//DEPENDENCIES
const customers    = require('express').Router();
const { response }  = require('express');
const db            = require('../models');
const { Customer } = db;
const { Op }        = require('sequelize');

module.exports = customers;