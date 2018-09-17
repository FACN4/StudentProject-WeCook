const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealList = require('./mealList');

const cookInfo = require('./cookInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', cookInfo.get);
router.get('/api/mealList/', mealList.get);

module.exports = router;
