const users = require('../models/users.model')

//todo obtener usuario

const GetUser = ()=> {
    return users;
}

//todo obtener usuario por id

const GetUserById = (id)=>{
   return users.find(u => u.id == id)
}

//todo agregar nuevo usuario

const AddUser = (NewUser)=> {

    return users.push(NewUser);
}

//todo eliminar un usuario por id

const DeleteUser = (id)=>{

    const  usuario = GetUserById(id); //? capturo el usuario correspondiente a ese id
    
    if(usuario)
    {
        const Uindice = users.findIndex(i => i.id == id);
        users.splice(Uindice,1) ;   
    }
}

//todo modificar un usuario existente

const UpdateUser = (id,name,lastname,phone,email,sex,password)=> {

    const usuario = GetUserById(id);
    console.log(usuario)
    //console.log(usuario.name);

        usuario.name = name
        usuario.lastname = lastname
        usuario.phone = phone
        usuario.email = email
        usuario.sex = sex,
        usuario.password = password,
        usuario.admin = false
        
        // const actualizado = usuario.lastname
        // console.log(actualizado);
}

module.exports = {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser}