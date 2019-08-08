const express = require('express');
const router = express.Router();

const home = require('../controllers/homeController');

// Home routes
router.get('/', home.show);
router.post('/name', home.name);

module.exports = router;