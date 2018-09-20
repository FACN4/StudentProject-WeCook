const jwt = require('jsonwebtoken');

require('env2')('./.env');

const verifyJWT = token => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
    if (err || !decodedToken) {
      return reject(err);
    }
    return resolve(decodedToken);
  });
});

const createJWTcookie = details => ['jwt', jwt.sign(details, process.env.SECRET), { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true }];


module.exports = { verifyJWT, createJWTcookie };
