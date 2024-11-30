const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, 'Username should be at least 3 characters long.']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, 'Email should be at least 10 characters long.']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'Password should be at least 5 characters long.']
    },

})

const user = mongoose.model('user', userSchema)

module.exports = user;