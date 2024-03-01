const Order = require('../models/order');

// Function to place an order
exports.placeOrder = async (userId, foodId, addressId, paymentMode) => {
    try {
        const newOrder = new Order({
            userId,
            foodId,
            addressId,
            paymentMode,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'pending'
        });

        return await newOrder.save();
    } catch (error) {
        throw new Error('Failed to place order');
    }
};
