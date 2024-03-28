// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, firstName, lastName, age, address, profilePicture } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create a new user with the provided data
    const newUser = new User({
      email,
      password,
      profile: {
        firstName,
        lastName,
        age,
        address,
        profilePicture
      }
    });
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
