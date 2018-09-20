const { db } = require('../db_connection');

const getConfirmationData = (userId) => {
  const queryString = `
  SELECT username, email, delivery_house_no, delivery_post_code FROM users WHERE id = $1;
  `;
  return db.one(queryString, [userId]);
};

module.exports = { getConfirmationData };
