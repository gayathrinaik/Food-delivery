const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Route to get all food items
router.get('/', foodController.getFoodList);

// Route to get filtered food items by category
router.get('/filter', foodController.getFilteredFoodList);

module.exports = router;
