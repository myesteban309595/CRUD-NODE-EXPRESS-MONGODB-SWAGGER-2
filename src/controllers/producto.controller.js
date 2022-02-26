
const products = require('../models/products.models')

//todo obtener productos

exports.GetProducts = async (req,res)=> {

    const productos = await products.find();
    console.log(productos);
    res.json("se han obtenido los productos");
    console.log("se han obtenido los productos");
}

//todo crear un nuevo producto

exports.PostProduct = async (req,res)=>{

    const {name,price,category} = req.body;

    if(name && price && category) //* compruebo que si me esten enviando una informacion
    {
        const productExist = await products.findOne({name}) ; //! buscar producto por su nombre

        if(productExist) //! validar un producto ya existente
        {
            console.log(("el producto ya esta registrado en la base de datos  ").bgRed);
        }else {
            
            const NewProduct = new products ({name,price,category});
            NewProduct.save();

            console.log(("se ha agregado un nuevo producto ").bgGreen.black);
            res.json(NewProduct);
            res.json('se ha agregado un nuevo producto')
        }

    }else {
        res.status(404).json("producto no ingresado, verifica errores en la solicitud")
    }
}

//todo Editar un producto

exports.EditProduct = async (req,res) => {

 const {name,price,category} = req.body;
 const { _id } = req.params;

 const productExist = await products.find(_id);
 console.log(productExist);

 if(productExist)
 {
     productExist.name = name
     productExist.price = price
     productExist.category = category 

 }else{
     res.status(404).json('productos no existe, id no encontrado')
 }

}

//todo eliminar un producto

exports.DeleteProduct = async (req,res) => {

    try{

        const {_id} = req.params;
        const exist = products.findById(_id);

        if(exist)
        {
            await products.deleteOne({_id:_id});
            res.json('producto eliminado')
            console.log((`se ha eliminado el producto : ${exist.name}`).bgRed);

        }

    } catch(e) {
        res.status(500).json(e)
    }


}


//module.exports = {GetProductsById,GetProductsByName,PostProduct,EditProduct,DeleteProduct};