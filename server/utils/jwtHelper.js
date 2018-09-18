const jwt = require("jsonwebtoken");
require("env2")("./.env");

const verifyJWT = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }
      return resolve(decodedToken);
    });
  });

const createJWT = details => jwt.sign(details, process.env.SECRET);
module.exports = { verifyJWT, createJWT };
