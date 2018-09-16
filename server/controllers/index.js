const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);

module.exports = router;
