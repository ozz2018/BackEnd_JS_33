/* eslint-disable */
const mongoose = require('mongoose')

const modelName = 'koders'
const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        lastName: {
            type: String,
            required: false,
            maxLength: 100,
        },
        email: {
            type: String,
            required: true, 
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        },
        password: {
            type: String,
            required: true, 
        },
        birthdate: {
            type: Date,
            required: false, 
        },
        generation: { //haciendo referencia a otro modelo (creando relaciones)
            type: mongoose.Schema.Types.ObjectId, //se coloca un id del modelo(documento) 
            ref: 'generations', //le decimos a que modelo debe hacer referencia, colocamos el nombre  
        },
        createdAt: {
            type: Date,
            default: Date.now, //agrega un valor por defecto  
        },
    }
)


module.exports = mongoose.model(modelName, schema)