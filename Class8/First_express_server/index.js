const express = require('express')
const appServer = express()
const port = 8080


const koders=[
{
    name:'Oscar',
    generation: 33
},
{
    name:'Charles',
    generation: 33
},
{
    name:'Hugol',
    generation: 33
},
]
//habilita al server para poder recibir peticiones en formato json
appServer.use(express.json())


appServer.get('/koders1', (request, response) => {
   /* response.writeHead(200, {
        'Content-Type': 'application/json',
        'yo-soy':'Ozz'
    })*/
    response.status(200)
    response.json(koders)
    console.log('Get root/koders')
  })





appServer.get('/koders', (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'yo-soy':'Ozz'
    })
    
    
    response.end(JSON.stringify(koders))
    console.log('Get root/koders')
  })


appServer.get('/exito', (request, response) => {
    
    console.log('Get root')
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'yo-soy':'Ozz'
    })
    response.end('Hello koders desde root get!')
  })

appServer.get('/', (request, response) => {
  response.end('Hello koders desde root get!')
  console.log('Get root')
})

appServer.post('/koders', (request ,response)=> {
    console.log('post koders')
    response.end('post a koders')
} )

appServer.post('/koders1', (request ,response)=> {
    console.log('body:',request.body)
    const newKoderName= request.body.name
    const newKoderGeneration= request.body.generation

    const newKoder={
        name:newKoderName,
        generation:newKoderGeneration
    }
    koders.push(newKoder)
    response.json(koders)
} )




appServer.listen(port, () => {
  console.log(`Server ready on port ${port}`)
})