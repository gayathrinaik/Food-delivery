const jwt = require('jsonwebtoken');
const config = require('../config');

// Function to generate JWT token
exports.generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

// Function to verify JWT token
exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (err) {
        return null;
    }
};
