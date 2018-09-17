const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealList = require('./mealList');
const basket = require('./basket');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealList/', mealList.get);
router.get('/api/basket/', basket.get);

module.exports = router;
