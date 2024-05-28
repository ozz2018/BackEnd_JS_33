//la definicion del server
const express = require ( 'express')
const kodersRouter = require("./kodersRouters")
const mentorsRouter = require("./mentorsRouter")

//const kodersUseCase= require('./kodersUseCase')

const server= express()
server.use(express.json())

//midleware a nivel de aplicacion
server.use( (request, response, next)=>{
    console.log("Midleware de aplicacion")
    
    const authorization = request.headers.authorization
    if (authorization==="alohomora"){
        request.isAwizard=true
        next()
    }else{
        response.status(403)
        response.json({
            message:"No tienes acceso",
        })
    }
    

})
//montar el router en el serverls

server.use("/koders",kodersRouter)
server.use("/mentors",mentorsRouter)


server.get('/',(request, response) => {
    response.json({
        message:"Kodemia APIv1",
    })
})


module.exports= server