/* eslint-disable */
const MentorModel = require('../models/mentors.model')
const createErrors = require('http-errors')

async function add(body) {
    const newMentor = await MentorModel.create(body)
    return newMentor
}

async function getAll() {
    const allMentors = await MentorModel.find()
    return allMentors    
}

async function getById(id) {
    const idMentor = await MentorModel.findById(id)
    return idMentor    
}
function deleteById(id) {
    const deletedMentor = MentorModel.findByIdAndDelete(id)
    return deletedMentor
}
function updateById(id, body) {
    const updatedMentor = MentorModel.findByIdAndUpdate(id, body, {
        new: true,
    })    
    return updatedMentor
}


module.exports = {
    add,
    getAll,
    getById,
    deleteById,
    updateById
}