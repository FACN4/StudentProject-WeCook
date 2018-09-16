const { getMealReviews } = require('../database/getQueries/getMealReviews');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getMealReviews(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).send('Could not find meal reviews'));
};
