/* eslint-disable */
const express = require('express')
const genUseCases = require('../usecases/generation.usecases')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const getAllGen = await genUseCases.getAll()
        response.json({
            success: true,
            data: { Generations: getAllGen }
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
        const generation = await genUseCases.getById(id)
        response.json({
            success: true,
            data: { generation }
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
    const body = request.body
    const newGeneration = await genUseCases.add(body)
    response.json({
        success: true,
        data: { newGeneration }
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
    const generationDeleted = await genUseCases.deleteById(id)
    response.json({
        success: true,
        data: { generationDeleted }
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
    const body = request.body
    const generationUpdated = await genUseCases.updateById(id, body)
    response.json({
        success: true,
        data: { generationUpdated }
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