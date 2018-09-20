const cookie = require('cookie');
const { verifyJWT } = require('../utils/jwtHelper');
const { getConfirmationData } = require('../database/getQueries');

exports.get = (req, res) => {
  const { jwt } = cookie.parse(req.headers.cookie);
  verifyJWT(jwt)
    .then(getConfirmationData)
    .then(row => res.send(row))
    .catch(() => res.status('500').send('Sorry, something went wrong'));
};
