/* eslint-disable */
const createError = require('http-errors')
const Koder = require('../models/koders.model')
const jwt = require('../lib/jwt')
const encrypt = require('../lib/encrypt')

async function login(email, password) {
    //validacion email
    const koder = await Koder.findOne({ email: email })
    if(!koder){
        throw createError(401, 'Invalid Data')
    }

    //regresa un boleean / Validacion Password 
    const isPassValid = await encrypt.compare(password, koder.password)
    if (!isPassValid) {
        throw createError(401, 'Invalid Data')
    }

    //creacion de token recibe la carga para el payload
    const token = jwt.sign({ id: koder._id })

    return token
}

module.exports = {login}