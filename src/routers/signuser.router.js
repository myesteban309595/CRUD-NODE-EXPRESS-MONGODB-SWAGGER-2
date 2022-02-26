
const express = require('express');
const colors = require('colors');

const SUroute = express.Router();

const controllersFunction = require('../controllers/usuario.controller');


SUroute.get('/ingreso', controllersFunction.GetUser )

module.exports = SUroute;