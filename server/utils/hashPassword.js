const bcrypt = require("bcryptjs");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (error, hash) => {
          if (error) {
            reject(error);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
};

const compareHash = (password, hashedRow) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedRow.password, (error, same) => {
      if (error) {
        reject(error);
      } else if (!same) {
        reject(new Error("Password do not match"));
      } else if (same) {
        resolve(hashedRow);
      }
    });
  });

module.exports = { hashPassword, compareHash };
