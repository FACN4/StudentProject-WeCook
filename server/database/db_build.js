const fs = require('fs');
const dbConnection = require('./db_connection');


const databaseQuery = queryString => new Promise((resolve, reject) => {
  dbConnection.query(queryString,
    (error) => {
      if (error) {
        reject(error);
      } else {
        resolve('Success');
      }
    });
});

const emptyTables = fs.readFileSync(`${__dirname}/build_tables.sql`, 'utf-8');
const dummyData = fs.readFileSync(`${__dirname}/db_dummy_data.sql`, 'utf-8');

if (process.argv[2] === 'run') {
  databaseQuery(emptyTables)
    .then(() => databaseQuery(dummyData))
    .catch(err => new Error(err));
}

module.exports = { databaseQuery, emptyTables, dummyData };
