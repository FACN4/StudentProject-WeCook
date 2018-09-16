const { getCookReviews } = require('../database/getQueries/getCookReviews');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getCookReviews(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).send('Could not find cook reviews'));
};
