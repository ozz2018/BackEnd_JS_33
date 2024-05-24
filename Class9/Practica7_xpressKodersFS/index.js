const express = require('express')

const fs = require('node:fs')
const dataFileKo = 'koders.json';
const jsonKoder= [{
    {
        "name": "ozz",
        "generation": 3,
        "gender": "H",
        "age": 39,
        "isActive": true
      }
      
}]

const port = 8080
const serverApp= express()

serverApp.use(express.json());

function init() {
    const existFile = fs.existsSync(dataFileKo);
    if (!existFile) {
      fs.writeFileSync(dataFileKo, JSON.stringify({ koders: [] }));
      console.log('Se Creo una Nueva Lista de Koders');
    }
  }
  function getKoders(){

  }
function updatekoders(){

}

serverApp.get((require, response)=>{
})

serverApp.post(port,(require, response)=>{
})

serverApp.delete((require, response)=>{
})



serverApp.listen(port,()=>{
    console.log("server's ready port", port)

})