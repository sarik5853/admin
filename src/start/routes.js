const express = require("express");
const fileUpload = require("express-fileupload")

const isAuth = require("../middlewares/isAuth");
const auth = require("../routes/auth");
const news = require("../routes/news");
const products = require("../routes/products")
const comment = require("../routes/comment")

const routes = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(fileUpload())
    app.use(express.static(process.cwd() + "/src/uploads/"));

    app.use("/api/auth", auth)
    app.use("/api/news", isAuth, news)
    app.use("/api/products", isAuth, products)
    app.use("/api/comment", isAuth, comment)

    app.use((err, req, res, next) => {
        res.status(500).json({ errorMessage: "Internal Server Error", err});
    });
};

module.exports = routes