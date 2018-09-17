const { getCookInfo } = require('../database/getQueries/getCookInfo');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getCookInfo(mealId)
    .then(row => res.send(row))
    .catch(() => res.send('Could not find cook'));
};
