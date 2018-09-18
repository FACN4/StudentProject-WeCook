const { postCreateUser } = require('../database/postQueries/postCreateUser');
const { hashPassword } = require('../utils/hashPassword');
const { createJWT } = require('../utils/jwtHelper');

exports.post = (req, res) => {
  const { password } = req.body;
  hashPassword(password)
    .then(hash => postCreateUser({ ...req.body, password: hash }))
    .then((userId) => {
      res.cookie('jwt', createJWT(userId), { maxAge: 1000 * 60 * 60 * 30, httpOnly: true });
      res.send();
    })
    .catch(() => res.status('500').send('Sorry, could not create account'));
};
