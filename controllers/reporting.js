//DEPENDENCIES
const reporting    = require('express').Router();
const { response } = require('express');
const db           = require('../models');
const { Owner }    = db;
const { Op }       = require('sequelize');


//tables of all sales 

module.exports = reporting;