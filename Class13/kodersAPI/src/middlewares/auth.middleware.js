const jwt =require('../lib/jwt')
const createError= require('http-errors')
const kodersUseCase = require("../usecases/koders.usecase")

async function auth (request,response,next){
    try {
        const authToken= request.headers.authorization
        if(!authToken){
            throw createError(401,'JWT is required')
        }
        const payload = jwt.verify(authToken)
        const user = await kodersUseCase.getById(payload.id)
        request.user= user   
        next()
    } catch (error) {
        response.status(401)
        response.json({
            success:false,
            error: error.message,
        })
    }

    
}
module.exports= auth