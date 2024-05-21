const http = require('http')

const serverOz = http.createServer((requestO ,responseO)=>{
    console.log('New Solicitud')
    responseO.end('Helloou Koders, this is the EnD,  este es el primer server')
})
const portOz = 3000
serverOz.listen(portOz, ()=>{
    console.log(`El servidor OZ esta escuchando, este es el primer server en el puerto ${portOz}`)
})
