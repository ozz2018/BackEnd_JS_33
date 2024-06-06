/* eslint-disable */
//importamos el modelo
const Generation = require('../models/generations.model')
//importamos errores
const createErrors = require('http-errors')

async function add(genData) {
    const newGen = await Generation.create(genData)
    return newGen
}

async function getAll() {
    const allGen = await Generation.find()
    return allGen
}

async function getById(id) {
    const foundOne = await Generation.findById(id)
    return foundOne
}

async function updateById(id, genData ) {
    const updateGen = await Generation.findByIdAndUpdate(id, genData, {
        new: true,
    })
    return updateGen
}

async function deleteById(id) {
    const genDeleted = await Generation.findByIdAndDelete(id)
    return genDeleted
}

module.exports = {
    add,
    getAll,
    getById,
    updateById,
    deleteById
}