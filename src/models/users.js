const { Schema, model } = require("mongoose");

const users = new Schema({
    photo: {
        type: String,
        default: 'default.png'
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = model("User", users);