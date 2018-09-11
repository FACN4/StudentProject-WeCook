const { db } = require('../db_connection');

const getCookInfo = (mealId) => {
  const queryString = `
  SELECT
    cook_info.cook_firstname, cook_info.cook_summary
  FROM
    (SELECT * FROM meals WHERE meals.id = $1) AS meal
  LEFT JOIN
    cook_info
  ON
    meal.cook_user_id = cook_info.user_id;`;

  return db.one(queryString, [mealId]);
};

getCookInfo(1)
  .then(console.log);
module.exports = { getCookInfo };
