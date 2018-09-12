const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);

module.exports = router;
