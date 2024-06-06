/* eslint-disable */
const mongoose = require('mongoose')

const modelName = 'mentors'
const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        lastName: {
            type: String,
            required: false,
            maxLength: 100,
        },
        course: {
            type: String,
            required: true, 
            minLength: 3,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            default: Date.now,  
        },
    }
)


module.exports = mongoose.model(modelName, schema)
