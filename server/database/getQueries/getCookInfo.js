const { db } = require('../db_connection');

const getCookInfo = (mealId) => {
  const queryString = `
  SELECT
    cook_info.cook_firstname, cook_info.cook_summary, cook_thumbnails.cook_image_url, cnt_reviews.count_reviews
  FROM
    (SELECT * FROM meals WHERE meals.id = $1) AS meal
  INNER JOIN
    cook_info
  ON
    meal.cook_user_id = cook_info.user_id
  LEFT JOIN
    (SELECT * FROM cook_images WHERE is_thumbnail=true) AS cook_thumbnails
  ON
    meal.cook_user_id = cook_thumbnails.user_id
  LEFT JOIN
    (
      SELECT
        reviews.cook_user_id, COUNT(reviews.star_rating) AS count_reviews
      FROM
        reviews
      GROUP BY
        reviews.cook_user_id
    ) AS cnt_reviews
  ON
    meal.cook_user_id = cnt_reviews.cook_user_id
    ;`;

  return db.one(queryString, [mealId]);
};

module.exports = { getCookInfo };
