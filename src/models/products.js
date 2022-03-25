const { Schema, model } = require("mongoose")

const schema = new Schema({
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photos: [
        {
            type: String,
            required: true
        }
    ],
    sizes: [
        {
            type: String,
            required: true
        }
    ],
    colors: [
        {
            type: String,
            required: true
        }
    ]
});

module.exports = model("Product", schema)