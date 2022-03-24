const express = require("express");


const routes = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

module.exports = routes