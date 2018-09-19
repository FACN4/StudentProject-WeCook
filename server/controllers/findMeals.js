const moment = require('moment-timezone');
const { getAvailableMeals } = require('../database/getQueries');
const { filterLocalMeals } = require('../utils/geoLocation');

exports.post = (req, res) => {
  const {
    deliveryDate,
    location: { longitude, latitude },
  } = req.body;
  const mealDate = moment.tz(deliveryDate, 'Europe/London').format();

  getAvailableMeals(mealDate)
    .then((mealArray) => {
      const mealList = filterLocalMeals(mealArray, { latitude, longitude });
      console.log(mealList);
      res.send(mealList);
    })
    .catch(() => res.status('500').send('Sorry, could not find any meals'));
};
