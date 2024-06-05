const mongoose = require('mongoose')
//const generationModel = require('./generation.model')

const modelName= 'koders'
const schema = new mongoose.Schema({firstName:{
    type: String,
    required:true,
    minLength:2,
    maxLength:100,
},
lastName:{
    type: String,
    required:false,
    maxLength:100,
},
email:{
    type: String,
    required: true,
    match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
},
birthdate:{
    type: Date,
    required:false
},
/*
generation:{
    type: mongoose.Schema.Types.ObjectId,   //relacion
    ref: generations
},
*/
password:{
    type: String,
    required:true
},
createdAt: {
    type: Date, 
    default: Date.now
}

})

module.exports= mongoose.model('modelName', schema)
//exporta - > modelo