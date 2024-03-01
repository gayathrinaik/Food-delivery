const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to register a new user
router.post('/register', userController.registerUser);

// Route to authenticate a user
router.post('/login', userController.authenticateUser);

module.exports = router;
