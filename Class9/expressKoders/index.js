//inicializar el server
const server = require('./server')
const db= require('./db')

//inicializar la base de datos
const port= 8082
//poner al server a escuchar
db.init()

server.listen(port, ()=>{
    console.log('server is running in port',port)
})