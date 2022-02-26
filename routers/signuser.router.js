const express = require('express');
const colors = require('colors');
const SUroute = express.Router();

SUroute.get('/', (req,res) => {

    res.json("has ingresado exitosamente");
    console.log(("has ingresado exitosamente").yellow);

})

module.exports = SUroute;