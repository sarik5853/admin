const { Schema, model } = require("mongoose");

const schema = new Schema({
    photo: {
        type: String,
        required: true
    }
});



module.exports = model("Comment", schema)