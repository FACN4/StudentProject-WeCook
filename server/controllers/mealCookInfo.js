const { getMealCookInfo } = require('../database/getQueries');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getMealCookInfo(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).res.send('Could not find meal cook information'));
};
