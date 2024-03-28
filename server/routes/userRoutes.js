// userRoutes.js (inside routes folder)

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/', userController.createUser);

module.exports = router;
