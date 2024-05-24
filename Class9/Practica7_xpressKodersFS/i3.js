const fs = require('node:fs')
const express =require("express")
const server = express()
const dbFile = "koders.json"
const fileExist = fs.existsSync(dbFile)
server.use(express.json())
if(!fileExist){
    fs.writeFileSync(dbFile, JSON.stringify({koders:[]}))
}
function updateKodersA(koders){
    const newkoders = {koders: koders}
    const newkodersAsString = JSON.stringify(newkoders)
    fs.writeFileSync(dbFile,newkodersAsString)
}
function getKodersA(){
    const content =fs.readFileSync(dbFile,"utf8")
    return JSON.parse(content).koders
}
function deleteKo(nombre){
    const arrayKodersA = getKodersA()
    for(let i=0;i<arrayKodersA.length;i++){
        const comparativo=arrayKodersA[i]
        if(nombre===comparativo){
            arrayKodersA.splice(i, 1)
        }
    }
    updateKodersA(arrayKodersA)
}
server.get('/koders', (request, response)=> {
    const arrayKodersA = getKodersA()
    response.status(200)
    response.json({
        message: "all koders",
        koders: arrayKodersA
        })
    }
)
server.post('/koders', (request, response)=> {
    const arrayKodersA = getKodersA()   
    const newKoder =  request.body
    const newKoderName = request.body.name
    const newKoderGen = request.body.generation
    const newKoderGender = request.body.gender
    const newKoderAge = request.body.age
    const newKoderActive = request.body.isActive
    if(!newKoderName){
        response.status(400)
        response.json({
            message: "Name required"
        })
        return
    }
    if(!newKoderGen){
        response.status(400)
        response.json({
            message: "Generacion required"
        })
        return
    }
    if(!newKoderGender){
        response.status(400)
        response.json({
            message: "Gender required"
        })
        return
    }
    if(!newKoderAge){
        response.status(400)
        response.json({
            message: "Age required"
        })
        return
    }
    if(!newKoderActive){
        response.status(400)
        response.json({
            message: "If is active required"
        })
        return
    }
    response.status(400)
    arrayKodersA.push(newKoder)
    updateKodersA(arrayKodersA)
    response.json({
        message: "New Koder added",
        koders: arrayKodersA
    })
})
server.delete('/koders/:name', (request, response)=> {
    const arrayKodersA = getKodersA()  
    const KoderName =request.params.name
    deleteKo(KoderName)
    response.json({
        message: "Student deleted successfully",
        koders: arrayKodersA
    })
})
server.delete('/koders', (request, response)=> {
    updateKodersA([])
    response.json({
        message: "SE FUE TODOOOO"
    })
})
server.listen(8080,()=>{
    console.log("server running on port 8080")
})