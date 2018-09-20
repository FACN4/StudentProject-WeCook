const cookie = require('cookie');
const { verifyJWT } = require('../utils/jwtHelper');
const { getConfirmationData } = require('../database/getQueries');

exports.get = (req, res) => {
  const { jwt } = cookie.parse(req.headers.cookie);
  console.log('here!');
  verifyJWT(jwt)
    .then(id => getConfirmationData(id))
    .then((row) => {
      res.send(row);
    })
    .catch((err) => {
      console.log(err);
      res.status('500').send('Sorry, something went wrong');
    });
};
