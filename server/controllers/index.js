const express = require('express');
const app = express();
const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');
const mealReviews = require('./mealReviews');
const mealList = require('./mealList');
const userRegister = require('./userRegister');
// const userLogin = require('./userLogin')

const mealCookInfo = require('./mealCookInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/mealCookInfo/:mealId', mealCookInfo.get);
router.get('/api/mealReviews/:mealId', mealReviews.get);
router.get('/api/mealList/', mealList.get);

// POST routes
// router.post('/api/userLogin',userLogin.post)
router.post('/api/userRegister', userRegister.post)

module.exports = router;
