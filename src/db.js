//? *********************  M O N G O O S E  ************************

const mongoose = require('mongoose');

//? ************* M O D U L O S   R E Q U E R I D O S  *************
const products = require('./models/products.models')
const users = require('./models/users.model')
//? ****************************************************************

const config = require('./config')
require('dotenv').config();
console.log(config)
const MONGOOSE_URL = config.module.MONGOOSE_URL;
//const MONGOOSE_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

(async () => {

    console.log(('conectado a la base de datos: ').bgBlue+' '+(MONGOOSE_URL+' ').bgYellow.black);
    console.log();
    await mongoose.connect(MONGOOSE_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
    console.log(("  conectado a la base de datos  ").bgGreen.black);
 
    const productExist = await products.find(); //* determinamos si existen productos en la base de datos
    
    if (productExist.length == 0) //! si no existen productos, agregalos
    {
        //todo creo un PRODUCTO base que sea admin

        const product1 = new products (
            {
                name: "coca cola",
                price: 2000,
                category : " bebidas"
            }
        )
        const product2 = new products (
            {
                name: "doritos",
                price: 4500,
                category : " mecatos"
            }
        )
        const product3 = new products (
            {
                name: "pony  malta",
                price: 3500,
                category : " bebidas"
            }
        )

        product1.save();
        product2.save();
        product3.save();
    }

    const userExist = await users.find(); //* determinamos si existen productos en la base de datos
    
    if (userExist.length == 0) //! si no existen productos, agregalos
    {
        //todo creo un PRODUCTO base que sea admin

        const user1 = new users (
            {
                name: 'marlon yoel',
                lastname: 'esteban valencia',
                phone : ' 3194562378',
                email: 'marlon_95@hotmail.com',
                sex: 'M',
                addres:'la calle',
                password:'marlon123',
                admin: true,
                state: 'activo'

            }
        )
        const user2 = new users (
            {
                name: 'ingrid paola',
                lastname: 'ejimenez robles',
                phone : ' 3001234589',
                email: 'ingrid@hotmail.com',
                sex: 'F',
                addres:'santa rita',
                password:'ingrid123',
                admin: false,
                state: 'activo'

            }
        )
        const user3 = new users (
            {
                name: 'tiburcio casimiro',
                lastname: 'del real',
                phone : ' 3124568789',
                email: 'casimiro@hotmail.com',
                sex: 'M',
                addres:'CAOBOS CUCUTA',
                password:'casimiro123',
                admin: false,
                state: 'activo'

            }
        )

        user1.save();
        user2.save();
        user3.save();
    }

})();