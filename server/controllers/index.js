const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');
const userRegister = require('./userRegister');
const userLogin = require('./userLogin');
const userLogout = require('./userLogout');
const stripeCharge = require('./stripeCharge');
const mealCookInfo = require('./mealCookInfo');
const findMeals = require('./findMeals');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', mealCookInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);
router.get('/api/userLogout', userLogout.get);

// POST routes
router.post('/api/userLogin', userLogin.post);
router.post('/api/userRegister', userRegister.post);
router.post('/api/charge', stripeCharge.post);
router.post('/api/findMeals', findMeals.post);

module.exports = router;
