
//* ALMACENAMIENTO DE INFORMACION SENSIBLE

const {config} = require('dotenv');

config(); //! LLAMAMOS LA FUNCION

exports.module = {

    MONGOOSE_URL : process.env.MONGOOSE_URL,
    PORT : process.env.PORT || 3000
}    