const http = require('http') //importando el modulo http
const servidor = http.createServer((req, res) => {
    console.log('===> req (solcitud)')
   // console.log(req)
    res.end(' Hi Koders')
    console.log(req.method)
    console.log(req.url)
})
const portOz= 3001
servidor.listen(portOz, ()=> {

console.log(`El servidor OZ esta escuchando en el puerto ${portOz}...`)
})