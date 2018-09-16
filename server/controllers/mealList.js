const { getMealList } = require('../database/getQueries/getMealList');

exports.get = (req, res) => {
  getMealList()
    .then(row => res.send(row))
    .catch(() => res.status('500').send('Sorry, could not fetch meals'));
};
