const users = require('../models/users.model')

//todo obtener usuario

exports.GetUser = async (req,res)=> {

   const usuarios =  await users.find();
   console.log(usuarios);
   console.log(("se han obtenido los usuarios"));
   res.json(usuarios);

}

//todo agregar nuevo usuario

exports.AddUser = async (req,res)=> {

    const {name,lastname,phone,email,sex,addreses,password,admin,state} = req.body

    if(name && lastname && phone && email && sex && addreses && password && state)
    {
        const userExist = await users.findOne({name});

        if(userExist)
        {
            res.json('este usuario ya existe en la base de datos')
            console.log(('usuario ya existe en la base de datos ').bgRed);

        }else {
            const NewUser = new usuarios({name,lastname,phone,email,sex,addreses,password,admin,state});
            NewUser.save();

            console.log(("se ha creado un nuevo usuario ").bg.Green.black);
            res.json(NewUser);
            res.json('se ha creado un nuevo usuario')
        }

    }else{
        res.status(404).json('ingrese datos validos')
    }


}

//todo modificar un usuario existente

exports.UpdateUser = async (req,res)=> {

    const {name,lastname,phone,email,sex,addreses,password,admin,state} = req.body;
    const {_id} = req.params;
    const existUser = await users.find(_id)
    console.log(existUser);

    if(existUser)
    {
        existUser.name = name
        existUser.lastname = lastname
        existUser.phone = phone
        existUser.email = email
        existUser.sex = sex
        existUser.addreses = addreses
        existUser.password = password
        existUser.state = state

        res.json('usuario actualizado'); 
        console.log((`se ha actualizado el usuario ${existUser.name}  `).bgBlue.black);

    }else{
        res.status(404).json('error al actualizar, No existe este usuario en la base de datos')
    }
}

//todo eliminar un usuario por id

exports.DeleteUser = async (req,res)=>{

    try {

        const {_id} = req.params;
        const userToDelete = users.findById(_id)
    
        if(userToDelete)
        {
            await users.deleteOne({_id:_id});
            res.json('usuario eliminado')
            console.log((`se ha eliminado el usuario : ${userToDelete.name}`).bgRed);
        }

    }catch(e) {

        res.status(500).json(e)

    }

}


//module.exports = {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser}