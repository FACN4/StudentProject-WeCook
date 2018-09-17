const { db } = require('../db_connection');

const mealReviews = (mealId) => {
  const queryString = `
  SELECT users.username, reviews.star_rating, reviews.reviewed_at,
   reviews.review_msg WHERE reviews.meal_id = $1;
  `;
  return db.one(queryString, [mealId]);
};

module.exports = { mealReviews };
