const User = require('../models/user');
const authService = require('../services/authService');

// Controller function to register a new user
exports.registerUser = async (req, res) => {
    const { email, name, role } = req.body;
    try {
        // Check if the user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user object
        const newUser = new User({
            email,
            name,
            role
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller function to authenticate a user
exports.authenticateUser = async (req, res) => {
    const { email } = req.body;
    try {
        // Check if the user exists
        let existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate authentication token
        const token = authService.generateToken(existingUser);

        // Return the user and token
        res.status(200).json({ user: existingUser, token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
