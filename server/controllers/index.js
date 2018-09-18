const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');
const mealList = require('./mealList');
const stripeCharge = require('./stripeCharge');

const mealCookInfo = require('./mealCookInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', mealCookInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);
router.get('/api/mealList/', mealList.get);
router.post('/charge', stripeCharge.post);

module.exports = router;
