const { getMealList } = require('../database/getQueries/getMealList');

exports.post = (req, res) => {
  console.log(req.body);
  console.log('here');
  getMealList()
    .then(row => res.send(row))
    .catch(() => res.status('500').send('Sorry, could not fetch meals'));
};
