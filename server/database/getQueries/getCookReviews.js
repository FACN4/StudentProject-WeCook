const { db } = require('../db_connection');

const getCookReviews = (mealId) => {
  const queryString = `
  SELECT
    cook_reviews.meal_id, users.username, cook_reviews.star_rating, cook_reviews.reviewed_at, cook_reviews.review_msg
  FROM
    (
      SELECT
        *
      FROM
        reviews
      WHERE
        reviews.cook_user_id =
        (
          SELECT
            cook_user_id
          FROM
            meals
          WHERE
            id = $1
        )
    ) AS cook_reviews
  INNER JOIN
    users
  ON
    cook_reviews.customer_user_id = users.id
  ;`;

  return db.any(queryString, [mealId]);
};

module.exports = { getCookReviews };
