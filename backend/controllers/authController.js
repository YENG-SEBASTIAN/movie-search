const User = require('../models/User');
const {generateToken, verifyToken} = require('../utils/generateToken');

// Register a new user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = await User.create({ username, email, password });

    // Remove password from the user object before sending the response
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({ 
      status: 201, 
      message: "Account Created successfully", 
      user: userResponse 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error' 
    });
  }
};


// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid credentials' 
      });
    }

    // Check if the entered password matches the hashed password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ 
        message: 'Invalid credentials' 
      });
    }

    // Remove password and other fields from the user object before sending the response
    const userResponse = user.toObject();
    delete userResponse.password;
    delete userResponse.createdAt;
    delete userResponse.updatedAt;

    // Generate JWT token and send the response
    token = generateToken(user._id)
    res.json({ 
      user : userResponse, 
      token: token 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
