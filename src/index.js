//? ******************* SWAGGER DOCUMENTATION **********************
const openAPI = require('./utils/swaggeroptions')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi= require('swagger-ui-express');
const swaggerSpecs = swaggerJsDoc(openAPI)
//? ****************************************************************

const express = require('express');  //* requerimos express
const colors = require('colors');
const config = require('./config')

const app = express();
const PORT = config.module.PORT //* configuracion puerto de escucha

require('./db');

app.use(express.json()); //* convertir codigo maquina a json

//! ***********  R U T A S  G E N E R A L E S  ************** */
// ****************  RUTA DOCUMENTATION ********************* */

app.use('/APIswagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

//*****************   LOGIN Y REGISTRO  ********************* */

app.use('/ingreso', require('./routers/signuser.router'));

//*******************  RUTAS ENDPOINTS  ********************* */

app.use('/productos', require('./routers/user.routers'));
app.use('/usuarios', require('./routers/products.routers') );

//! ********************************************************* */

//todo configuramos el puerto de escucha de express

app.listen(PORT, ()=> {

    console.log(("escuchando desde el puerto "+ PORT + " ").inverse);
})

module.exports = app;

console.log(("          hola mundo ").rainbow);

