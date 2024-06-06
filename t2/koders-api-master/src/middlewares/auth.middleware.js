/* eslint-disable */

const createError = require("http-errors")
const jwt = require('../lib/jwt')
const koderUseCase = require('../usecases/koders.usecases')
//revisamos el token
async function auth(request, response, next) {
    try {
        //lo que nos da el user en el header de auth es el token 
        const token = request.headers.authorization  
        //si no bhay header de autorizacion
        if(!token){
            throw createError(401, 'JWT is require')
        }

        //verificar que ele token sea veridico que sea expedido por mi, que sea valido etc
        const payload = jwt.verify(token) // nos retorna el payload es decir la carga de datos (ahora tiene el id)
        const user = await koderUseCase.getById(payload.id)

        //agregamos al user la nueva variable que creamos
        request.user = user
        next()
    } catch (error) {
        response.status(401) // si hay errores significa que no esta autorizado es 401
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = auth

