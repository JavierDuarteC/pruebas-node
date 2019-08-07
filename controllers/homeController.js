const express = require('express');

var homeController = {};

homeController.show = function (req, res) {
    res.render('../views/index');
};

module.exports = homeController;