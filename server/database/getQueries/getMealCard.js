const { db } = require('../db_connection');

const getMealCard = (mealId) => {
  const queryString = `
  SELECT
    meal.id, meal.meal_title, meal.price, meal.meal_scheduled_at, meal.final_booking_at, meal.remaining_portions, meal_thumbnails.meal_image_url, cook_info.cook_firstname, cook_thumbnails.cook_image_url, av_review.av_star_rating, av_review.count_reviews
  FROM
    (SELECT * FROM meals WHERE meals.id = $1) AS meal
  LEFT JOIN
    (SELECT * FROM meal_images WHERE is_thumbnail=true) AS meal_thumbnails
  ON
    meal.id = meal_thumbnails.meal_id
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
        reviews.cook_user_id, AVG(reviews.star_rating) AS avg_star_rating, COUNT(reviews.star_rating) AS count_reviews
      FROM
        reviews
      GROUP BY
        reviews.cook_user_id
    ) AS av_review
  ON
    meal.cook_user_id = av_review.cook_user_id;
    `;

  return db.one(queryString, [mealId]);
};

module.exports = { getMealCard };
