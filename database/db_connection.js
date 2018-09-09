const { Pool } = require('pg');
require('env2')('./config.env');

let { TRADING_DB_URL } = process.env;
if (process.env.NODE_ENV === 'test') {
  TRADING_DB_URL = process.env.TESTING_DB_URL;
}

if (!TRADING_DB_URL) throw new Error('Enviroment variable TRADING_DB_URL must be set');

const options = {
  connectionString: TRADING_DB_URL,
};

module.exports = new Pool(options);
