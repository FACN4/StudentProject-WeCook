const { db } = require('../db_connection');

const getHashedPass = (username) => {
  const queryString = `
  SELECT id, password FROM users WHERE username = $1;
  `;
  return db.one(queryString, [username]);
};

module.exports = { getHashedPass };
