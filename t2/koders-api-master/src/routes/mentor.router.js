/* eslint-disable */
const express = require('express')
const mentorUseCase = require('../usecases/mentores.usecases')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const Mentors = await mentorUseCase.getAll()
        response.json({
            success: true,
            data: { Mentors }
        }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
        
    }
})

router.post('/', async (request, response) => {
    try {
        const { body } = request
        const mentorAdded = await mentorUseCase.add(body)
        response.json({
            success: true,
            data: { mentorAdded }
        }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
        
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const mentorFound = await mentorUseCase.getById(id)
        response.json({
            success: true,
            data: { mentorFound }
        }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
        
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const mentorDeleted = await mentorUseCase.deleteById(id)
        response.json({
            success: true,
            data: { mentorDeleted }
        }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const { body } = request
        const mentorUpdated = await mentorUseCase.updateById(id, body)
        response.json({
            success: true,
            data: { mentorUpdated }
        }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
        
    }
})


module.exports = router
