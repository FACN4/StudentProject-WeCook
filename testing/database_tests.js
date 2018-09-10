const test = require('tape');
const { db } = require('./../server/database/db_connection');
const { emptyTables, dummyData } = require('./../server/database/db_build');

test('--------database_tests.js-------', (t) => {
  t.pass('tape is working');
  t.equal(process.env.NODE_ENV, 'test', 'the process.env.NODE_env enviroment should be test');
  t.end();
});

test('DB build is working correctly', (t) => {
  db.none(emptyTables)
    .then(() => {
      t.pass('build emptyTables works with no errors');
    })
    .then(() => db.none(dummyData))
    .then(() => {
      t.pass('filling DB with dummy data works with no errors');
      t.end();
    })
    .catch((err) => {
      t.fail(err);
      t.end();
    });
});
