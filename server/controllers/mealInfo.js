const { getMealInfo } = require('../database/getQueries/getMealInfo');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getMealInfo(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).send('Could not find meal'));
};
