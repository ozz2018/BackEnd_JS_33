/* eslint-disable */
const mongoose = require('mongoose')
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect() {
    return mongoose.connect(MONGO_URI)
}


//exportamos un objeto que contiene una funcion que regresa una promesa.. por eso las llaves
module.exports = { connect }