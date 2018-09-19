const { db } = require('../db_connection');

const getAvailableMeals = (mealDate) => {
  const queryString = `
  SELECT
    meal.id, meal.meal_title, meal.price, meal.final_booking_at, meal.remaining_portions, date_trunc('day',meal.meal_scheduled_at), meal_thumbnails.meal_image_url, cook_info.cook_firstname, cook_info.kitchen_lat_long, cook_info.delivery_range_m, cook_thumbnails.cook_image_url, av_review.av_star_rating, av_review.count_reviews
  FROM
    (SELECT * FROM meals WHERE final_booking_at > NOW() AND date_trunc('day',meal_scheduled_at) = date_trunc('day',$1::timestamp)) AS meal
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
        reviews.cook_user_id, AVG(reviews.star_rating) AS av_star_rating, COUNT(reviews.star_rating) AS count_reviews
      FROM
        reviews
      GROUP BY
        reviews.cook_user_id
    ) AS av_review
  ON
    meal.cook_user_id = av_review.cook_user_id;
    `;
  return db.any(queryString, [mealDate]);
};
// console.log(new Date(2018, 8, 21));
// getAvailableMeals(new Date(2018, 8, 21))
//   .then(console.log)
//   .catch(console.log);

module.exports = { getAvailableMeals };
