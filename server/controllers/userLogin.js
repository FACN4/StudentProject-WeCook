const { getHashedPass } = require('../database/getQueries/getHashedPass');
const { compareHash } = require('../utils/hashPassword');
const { createJWTcookie } = require('../utils/jwtHelper');

exports.post = (req, res) => {
  const { username, password } = req.body;
  getHashedPass(username)
    .then(hashedRow => compareHash(password, hashedRow))
    .then(({ id: userId }) => {
      res.cookie(...createJWTcookie(userId));
      res.send();
    })
    .catch(() => {
      res.status('500').send('Sorry, could not login');
    });
};
