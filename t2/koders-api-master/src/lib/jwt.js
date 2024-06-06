/* eslint-disable */
const jwt = require('jsonwebtoken')

//palabra secreta de nuestras variables de entorno
const { JWT_SECRET } = process.env

//funcion que se encarga de expedir el token
//payload = carga de datos o cuerpo
function sign (payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' }) // puede ser 1h / 1w / 1m / 1y 
}

function verify (token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = { sign, verify }