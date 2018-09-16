const { db } = require('../db_connection');

const getMealInfo = (mealId) => {
  const queryString = `
  SELECT
    meal.meal_title, meal.price, meal.meal_scheduled_at, meal.description, meal.remaining_portions, meal.final_booking_at, meal.ingredients, meal.tags, meal_images.meal_image_url, meal_images.is_thumbnail
  FROM
    (
      SELECT
        *
      FROM
        meals
      WHERE
        meals.id = $1
    ) AS meal
  LEFT JOIN
    meal_images
  ON meal.id = meal_images.meal_id
  ;`;

  const flattenRows = rows => new Promise((resolve, reject) => {
    if (rows.length === 0) {
      reject(new Error('getMealInfo did not return any meals'));
    }
    try {
      let flatRow = { ...rows[0], meal_image_url: [] };
      delete flatRow.is_thumbnail;
      rows.forEach((row) => {
        const { is_thumbnail: isThumbnail, meal_image_url: mealUrl } = row;
        const { meal_image_url: imageArray } = flatRow;
        flatRow = { ...flatRow, meal_image_url: [...imageArray, { mealUrl, isThumbnail }] };
      });
      resolve(flatRow);
    } catch (err) {
      reject(err);
    }
  });

  return db.any(queryString, [mealId]).then(flattenRows);
};

module.exports = { getMealInfo };
