const { getMealInfo } = require('../database/getQueries/getMealInfo');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getMealInfo(mealId)
    .then(row => res.send(row))
    .catch(() => res.send('Could not find meal'));
};
