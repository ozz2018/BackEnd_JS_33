const express = require('express')
const server = express()
server.use(express.json())
const todos=[]

server.get('/todos', (request, response)=> {
    response.json({
        message:"all todos",
        todos: todos,
    })
})

server.post('/toDos', ()=> {

})

server.delete('/toDos/:idx', ()=> {

})


server.listen(8081, ()=>{
    console.log('servidor ready in port 8080')

})