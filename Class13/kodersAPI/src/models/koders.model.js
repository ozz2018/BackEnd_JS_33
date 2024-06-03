const mongoose = require('mongoose')

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
/*generation:{
    type: Number,
    min:1,
    max:100,
},*/
password:{
    type: String,
    required:true
},
createdAt: {
    type: Date, // Use Date (uppercase) for the data type
    default: Date.now // Function to set the default value
  }

})

module.exports= mongoose.model('modelName', schema)
//exporta - > modelo