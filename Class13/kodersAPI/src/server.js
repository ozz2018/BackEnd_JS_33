const express = require('express')

const app= express()//server
//middleware
app.use(express.json())

app.get('/',(request, response) =>{
    response.json({
        message:"Koders APIv1"
    })
})
module.exports = app