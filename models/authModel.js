const { Schema, model } = require('mongoose')

const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
}, { timestamps: true })

module.exports = model('users', authSchema);