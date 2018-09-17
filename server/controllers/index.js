const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');
const mealList = require('./mealList');

const mealCookInfo = require('./cookInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', mealCookInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);
router.get('/api/mealList/', mealList.get);

module.exports = router;
