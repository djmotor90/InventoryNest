//DEPENDENCIES
const reporting    = require('express').Router();
const { response } = require('express');
const db           = require('../models');
const { Owner, Customer }    = db;
const { Op }       = require('sequelize');





module.exports = reporting;


