/* eslint-disable */
const express = require('express')
const koderUseCase = require('../usecases/koders.usecases')
const auth = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/', auth, async (request, response) => {
    try {
    //esto nos regresa una promesa
    const koders = await koderUseCase.getAll()
    response.json({
        success: true,
        data:{
            koders
        }
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
    const koderCreated = await koderUseCase.create(request.body)
    response.json({
        success: true,
        data:{
            koder:  {koderCreated} ,
        }
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
    const koder = await koderUseCase.getById(id)
    response.json({
        success: true,
        data: { koder },
    })
} catch (error) {
    response.status(error.status || 500)
    response.json({
        success: false,
        error: error.message
    })
   }
})

router.delete('/:id', auth, async (request, response) => {
   try {
    const { id } = request.params
    const koderDeleted = await koderUseCase.deleteById(id)
    response.json({
        success: true,
        data: { koder: koderDeleted },
    })
} catch (error) {
    response.status(error.status || 500)
    response.json({
        success: false,
        error: error.message
    })
}
})
// epistory
router.patch('/:id', async (request , response) => {
try {
    const { id } = request.params
    const koderUpdated = await koderUseCase.UpdateById(id, request.body)
    response.json({
        success: true,
        data: { koder: koderUpdated },
    })
} catch (error) {

    response.json({
        success: false,
        error: error.message
    })
}
})


module.exports = router
