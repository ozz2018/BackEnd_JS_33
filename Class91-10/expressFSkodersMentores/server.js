//la definicion del server
const express = require ( 'express')

const kodersUseCase= require('./kodersUseCase')

const server= express()
server.use(express.json())
server.get('/',(request, response) => {
    response.json({
        message:"Kodemia APIv1",
    })
})
//endPoints  =  get / koders    = metod & url
server.get('/koders', (request,response)=> {
    try{
        const koders = kodersUseCase.getAll()
        response.json({
            message:"All Koders",
            data:{
                koders:koders,
        },
    })
}
    catch(error){
        response.status(error.status || 500)
        response.json({
            error: error.message,
    })
}
})

server.post("/koders", (request, response )=> {
    try {
        const newKoder= request.body
        const koders = kodersUseCase.add(newKoder)

        response.json({
            message:"koder added",
            data:{koders},
        })

    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
        
    }

})

server.delete("/koders", (request, response)=>{
    try {
        const koders= kodersUseCase.deleteAll()
        response.json({
            message:"Koders Deleted",
            data:{koders},

        })
        
    } catch (error) {
         response.status(error.status || 500)
        response.json({
            error: error.message,
        })
    }

})


server.delete("/koders/:name" , (request, response)=>{
    try {
        const name = request.params.name
        const koders =  kodersUseCase.deleteByName(name)

        response.json({
            message:"Koder Deleted",
            data:{koders},
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
    }


})



module.exports= server