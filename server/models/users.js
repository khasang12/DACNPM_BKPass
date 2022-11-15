const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    numStarsRate: {
        type: Number,
        required: true
    },
    idDeleted: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: false,
        unique: true
    },
    phoneNum : {
        type: String,
        required: false,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    gender : {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    feedbacks : {
        type: [feedbackSchema],
        default: []
    },
    markItems : {
        type: [String],
        default: []
    },
    salingItems: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model("Users", userSchema, "Users");