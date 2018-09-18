const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');
const mealCookInfo = require('./mealCookInfo');
const findMeals = require('./findMeals');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', mealCookInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);

// POST routes
router.post('/api/findMeals', findMeals.post);

module.exports = router;
