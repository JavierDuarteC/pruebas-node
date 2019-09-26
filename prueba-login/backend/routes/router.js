const express = require('express');
const router = express.Router();
const auth = require('../controllers/AuthController');

// Login routes
router.get('/singUp', auth.singUp);
router.post('/logIn', auth.logIn);
router.get('/logOut', auth.logOut);
router.get('/verify', auth.verify);

module.exports = router;