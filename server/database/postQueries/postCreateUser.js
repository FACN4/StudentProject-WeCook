const { db } = require('../db_connection');

const errHandler = errMsg => result => new Promise((resolve, reject) => {
  if (result.length > 0) {
    reject(new Error(errMsg));
  } else {
    resolve(null);
  }
});

const usernameUnique = (username) => {
  const queryString = `
  SELECT
    id
  FROM
    users
  WHERE
    username = $1;`;

  return (
    db.any(queryString, [username])
      .then(errHandler('Sorry, that username is already taken')));
};

const emailUnique = (email) => {
  const queryString = `
  SELECT
    id
  FROM
    users
  WHERE
    email = $1;`;
  return (
    db.any(queryString, [email])
      .then(errHandler('This email address has already been used')));
};


const postCreateUser = (userDetails) => {
  const {
    username, password, email, phoneNo, houseNo, postCode,
  } = userDetails;

  const userDetailsArray = [username, password, email, phoneNo, houseNo, postCode];

  const queryString = `
  INSERT INTO
    users (username, password, email, phone_no, delivery_house_no, delivery_post_code)
  VALUES
    ($1, $2, $3, $4, $5, $6)
  RETURNING id
    ;`;

  return (
    usernameUnique(username)
      .then(() => emailUnique(email))
      .then(() => db.one(queryString, userDetailsArray))
  );
};

module.exports = { postCreateUser };
