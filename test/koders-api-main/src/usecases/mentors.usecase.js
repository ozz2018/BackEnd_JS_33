const createError = require('http-errors');
const encrypt = require('../lib/encrypt');
const Mentors = require('../models/mentors.model');

async function create(mentorData) {
    const mentorFound = await Mentors.findOne({ email: mentorData.email });
    if (mentorFound) {
        throw createError( 409, "Email already in use");
    }
    mentorData.password = await encrypt.encrypt(mentorData.password);

    const newMentor = await Mentors.create(mentorData);
    return newMentor;
}

async function getAll() {
    const allMentors = await Mentors.find()
    return allMentors;
}

async function getById(id) {
    const mentor = await Mentors.findById(id);
    return mentor;
};

async function deleteById(id) {
    const mentorDeleted = await Mentors.findByIdAndDelete(id);
    return mentorDeleted;
}

async function updateById(id) {
    const updatedMentor = await Mentors.findByIdAndUpdate(id);
    return updatedMentor;
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
}