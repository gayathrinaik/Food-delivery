const Food = require('../models/food');

// Function to fetch all food items
exports.getAllFoodItems = async () => {
    try {
        return await Food.find();
    } catch (error) {
        throw new Error('Failed to fetch food items');
    }
};

// Function to fetch filtered food items by category
exports.getFilteredFoodItems = async (category) => {
    try {
        return await Food.find({ category });
    } catch (error) {
        throw new Error('Failed to fetch filtered food items');
    }
};
