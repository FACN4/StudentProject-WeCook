const fs = require('fs');
const dbConnection = require('./db_connection');


const makeEmptyTables = fs.readFileSync(`${__dirname}/build_tables.sql`, 'utf-8');

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

// const fillDummyData = fs.readFileSync(`${__dirname}/db_dummy_data.sql`, 'utf-8');


if (process.argv[2] === 'run') {
  runDbBuild()
    .then(console.log)
    .catch(console.log);
}

module.exports = { runDbBuild };
