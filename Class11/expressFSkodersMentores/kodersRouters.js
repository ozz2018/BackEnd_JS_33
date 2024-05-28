const express = require("express")
const router = express.Router()
const kodersUseCase = require("./kodersUseCase")

//midleware de routers

router.use( (request, response, next)=>{
    console.log("Midleware de router (koders)")

    const authorization = request.headers.authorization
    if (authorization==="alohomora"){
        next()
    }else{
        response.status(403)
        response.json({
            message:"No tienes acceso",
        })
    }
    
})

//endPoints  =  get / koders    = metod & url
router.get('/',  
(request, response, next)=>{
    console.log("Midleware a nivel de ruta  (koders)",request.isAwizard)
    next()
},

(request,response)=> {
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

router.post("/", (request, response )=> {
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

router.delete("/", (request, response)=>{
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


router.delete("/:name" , (request, response)=>{
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



module.exports= router