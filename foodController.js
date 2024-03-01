const Food = require('../models/food');

// Controller function to get all food items
exports.getFoodList = async (req, res) => {
    try {
        const foodList = await Food.find();
        res.status(200).json(foodList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to get filtered food items
exports.getFilteredFoodList = async (req, res) => {
    const { category } = req.query;
    try {
        const filteredFoodList = await Food.find({ category });
        res.status(200).json(filteredFoodList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
