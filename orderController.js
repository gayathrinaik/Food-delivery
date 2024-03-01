const Order = require('../models/order');

// Controller function to place an order
exports.placeOrder = async (req, res) => {
    const { userId, foodId, addressId, paymentMode } = req.body;
    try {
        // Assuming order data is provided in the request body
        const newOrder = new Order({
            userId,
            foodId,
            addressId,
            paymentMode,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'pending' // Assuming order status starts as pending
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

