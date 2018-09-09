const { Pool } = require('pg');
require('env2')('./.env');

let { DB_URL } = process.env;
if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
}

if (!DB_URL) throw new Error('Enviroment variable DB_URL must be set');

const options = {
  connectionString: DB_URL,
};

module.exports = new Pool(options);
