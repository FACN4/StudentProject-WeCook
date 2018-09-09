/* eslint-disable no-console */
const fs = require('fs');
const dbConnection = require('./dbconnection');


const makeEmptyTables = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');

const runDbBuild = () => new Promise((resolve, reject) => {
  dbConnection.query(makeEmptyTables,
    (error) => {
      if (error) {
        reject(error);
      } else {
        resolve('Success');
      }
    });
});

if (process.argv[2] === 'run') {
  runDbBuild()
    .then(console.log)
    .catch(console.log);
}

module.exports = runDbBuild;
