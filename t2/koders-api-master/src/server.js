/* eslint-disable */
const express = require('express')
const kodersRouter = require('./routes/koders.router') 
const authRouter = require('./routes/auth.router')
const genRouter = require('./routes/generation.router')
const mentorRoute = require('./routes/mentor.router')

const app = express()


//middleware - tratamiento de request 
app.use(express.json())

//despues montamos nuestro servidor
app.use('/koders', kodersRouter)
app.use('/auth', authRouter)
app.use('/mentors', mentorRoute)
app.use('/generation', genRouter)

// app.use('/mentors', mentorsRouter)

app.get('/', (request, response) => {
    response.json({
        message: 'Api koders v1'
    })
})

module.exports = app;