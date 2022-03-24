const config = require("config");
const { connect } = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/users");

const db = async() => {
    connect(config.get("mongoUri"));

    const findUser = await User.findOne();

    if (!findUser) {
        const password = await bcrypt.hash('qwerty@123', 12);
        const user = new User({
            number: '+998908557796',
            password
        });
        await user.save();
    }
};

module.exports = db;