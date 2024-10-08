const userModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
  const { name, username, password, role } = req.body;

  // Check if all fields are provided
  if (!name || !username || !password || !role) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  // Check if the user already exists
  const userExists = await userModel.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user
  const user = await userModel.create({
    name,
    username,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      role: user.role,
      token: generateToken(user._id), // Generate JWT token
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = {
  registerUser,
};
