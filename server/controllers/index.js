const express = require('express');

const router = express.Router();

// Import controllers
const mealInfo = require('./mealInfo');

const cookInfo = require('./cookInfo');

// GET routes
router.get('/api/mealInfo/:mealId', mealInfo.get);
router.get('/api/cookInfo/:Id', cookInfo.get);

module.exports = router;
