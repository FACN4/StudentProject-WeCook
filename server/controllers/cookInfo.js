const { getCookInfo } = require('../database/getQueries/getCookInfo');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getCookInfo(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).res.send('Could not find cook'));
};
