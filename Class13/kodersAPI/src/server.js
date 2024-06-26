const express = require('express')
const kodersRouter= require ('./routes/koders.router')
const authRouter= require('./routes/auth.router')
const generation= require('./routes/generation.router')

const app= express()//server
//middleware
app.use(express.json())

app.use('/koders',kodersRouter)
app.use('/auth',authRouter)
app.use('/generation',generation )
app.get('/',(request, response) =>{
    response.json({
        message:"Koders APIv1"
    })
})
module.exports = app