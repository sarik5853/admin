const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const Users = require("../models/users");

router.post("/login", async(req, res) => {
    try {
        const { number, password } = req.body;
        
        const user = await Users.findOne({ number });
        
        if(!user)
            return res.status(401).json({ message: "Uncorrected username or password" });

        const pass = await bcrypt.compare(password, user.password);
        if(!pass)
            return res.status(401).json({ message: "Uncorrected username or password" });

        const token = jwt.sign({ userId: user._id });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    };
});

module.exports = router