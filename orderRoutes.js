const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to place an order
router.post('/placeOrder', orderController.placeOrder);

module.exports = router;
