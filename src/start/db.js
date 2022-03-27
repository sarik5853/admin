const config = require("config");
const { connect } = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/users");

const db = async() => {
    console.log(config.get('mongoUri'));
    try {
        await connect(config.get("mongoUri"));
        console.log('connected mongodb server')

    } catch (e) {
        console.log(e);
    }

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