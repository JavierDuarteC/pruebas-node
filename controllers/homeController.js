const express = require('express');

let homeController = {};

homeController.show = function (req, res) {
    res.render('../views/index');
};

homeController.name = function (req, res) {
    res.render('../views/name', { user: req.body.username });
};

module.exports = homeController;