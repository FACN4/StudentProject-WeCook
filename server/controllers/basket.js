const { getBasket } = require('../database/getQueries/getBasket');

exports.get = (req, res) => {
  const { mealId } = req.params;
  getBasket(mealId)
    .then(row => res.send(row))
    .catch(() => res.status(500).send('Could not find basket items'));
};
