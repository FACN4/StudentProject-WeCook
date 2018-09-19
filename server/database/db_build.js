const fs = require('fs');
const { db } = require('./db_connection');

const emptyTables = fs.readFileSync(`${__dirname}/build_tables.sql`, 'utf-8');
const cookFillerData = fs.readFileSync(`${__dirname}/cook_filler_data.sql`, 'utf-8');

if (process.argv[2] === 'run') {
  db.none(emptyTables)
    .then(() => db.none(cookFillerData))
    .catch(err => new Error(err));
}

module.exports = { emptyTables, cookFillerData };
