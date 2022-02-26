
const mongoose = require('mongoose');

const addresSchema = new mongoose.Schema({

    addres: {
        type: String
    }

})

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required : true
    },
    lastname: {
        type: String,
        required : true
    },
    phone:{
        type: String,
        required : true
    }, 
    email: {
        type: String,
        required : true
    },
    sex: {
        type: String,
        required : true
    },

    addreses: [addresSchema],

    password: {
        type: String,
        required : true
    },
    admin: {
        type: Boolean,
        required : true
    },
    state: {
        type: String,
        required : true
    }

});

module.exports = mongoose.model('usuarios', userSchema);

