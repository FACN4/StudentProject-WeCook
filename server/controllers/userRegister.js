const { postCreateUser } = require('../database/postQueries/postCreateUser');
const { hashPassword } = require('../utils/hashPassword');
const { createJWTcookie } = require('../utils/jwtHelper');

exports.post = (req, res) => {
  const { password } = req.body;
  hashPassword(password)
    .then(hash => postCreateUser({ ...req.body, password: hash }))
    .then((userId) => {
      res.cookie(...createJWTcookie(userId));
      res.send();
    })
    .catch(() => {
      res.status('500').send('Sorry, could not create account');
    });
};
