// generate tokens

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};


const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    console.error('Invalid token:', error.message);
  }
};

module.exports = {generateToken, verifyToken};
