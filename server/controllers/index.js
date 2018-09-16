const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealList = require('./mealList');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealList/', mealList.get);

module.exports = router;
