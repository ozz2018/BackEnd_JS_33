const http = require('node:http')
const serverOz = http.createServer((request,response)=>{
    //response.end('Hola koders desde el 1er server')
    //console.log(request)
    const method = request.method;
    const url = request.url;

    response.end(`${method}:${url}`)
})
const portz =8080
serverOz.listen(portz,()=>{
    console.log(`sever is listening on port ${portz} hi`)
})