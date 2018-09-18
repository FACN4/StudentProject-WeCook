const { getHashedPass } = require('../database/getQueries/getHashedPass');
const { compareHash } = require('../utils/hashPassword');
const { createJWT } = require('../utils/jwtHelper');

exports.post = (req, res) => {
  const { username, password } = req.body;
  getHashedPass(username)
    .then(hashedRow => compareHash(password, hashedRow))
    .then(({ id: userId }) => {
      res.cookie('jwt', createJWT(userId), {
        maxAge: 1000 * 60 * 60 * 30,
        httpOnly: true,
      });
      res.send();
    })
    .catch((err) => {
      console.log(err);
      res.status('500').send('Sorry, could not login');
    });
};
