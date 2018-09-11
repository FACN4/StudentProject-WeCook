const { db } = require('../db_connection');

const getMealInfoData = (mealId) => {
  const queryString = `
  SELECT
    meals.meal_title, meals.price, meals.meal_scheduled_at, meals.description, meals.remaining_portions, meals.final_booking_at, meals.ingredients, meals.tags
  FROM
    meals
  WHERE
    meals.id = $1;
  `;
  return db.one(queryString, [mealId]);
};

module.exports = { getMealInfoData };
