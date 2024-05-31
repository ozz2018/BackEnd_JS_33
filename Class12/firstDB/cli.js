require ('dotenv').config()
const mongoose = require('mongoose')

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}= process.env
//const MONGO_URI=´mongo+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}´

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`;

//modelo

const Koder = mongoose.model("koder", new mongoose.Schema({
        firstName:{
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
        generation:{
            type: Number,
            min:1,
            max:100,
        },
})
)

//protocolo 
mongoose.
    connect(
        MONGO_URI//'mongodb+srv://rumbto:Clarita5$@cluster0.pvld4w2.mongodb.net/kodeMongoDB'
    )
    .then(()=>{
    console.log('Conexión exitosa')
    Koder.create({
        firstName:"Ozz",
        lastName:"Sol",
        email:"oscar-solano@hotmail.com",
        birthdate:new Date("1984-08-27"),
        generation:33,
    }) 
        .then(() => console.log('Koder Created'))
        .catch((error) =>console.error('Error al crear el koder')  )
    })
    .catch((error)=>{
    console.error("Error al conectar", error)
    })

//console.log("prom:", prom)
//promesas / promises
//se crean en estado pendiente
//resolve 
//reject
