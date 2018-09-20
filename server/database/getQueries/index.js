const { getMealInfo } = require('./getMealInfo');
const { getMealCookInfo } = require('./getMealCookInfo');
const { getMealCard } = require('./getMealCard');
const { getMealReviews } = require('./getMealReviews');
const { getAvailableMeals } = require('./getAvailableMeals');
const { getConfirmationData } = require('./getConfirmationData');

module.exports = {
  getMealInfo,
  getMealCookInfo,
  getMealCard,
  getMealReviews,
  getAvailableMeals,
  getConfirmationData,
};
