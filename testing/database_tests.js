const test = require('tape');
const { runDbBuild } = require('./../server/database/db_build');

test('--------database_tests.js-------', (t) => {
  t.pass('tape is working');
  t.equal(process.env.NODE_ENV, 'test', 'the process.env.NODE_env enviroment should be test');
  t.end();
});

test('runDbBuild is working correctly', (t) => {
  runDbBuild()
    .then(() => {
      t.pass('runDbBuild works with no errors');
      t.end();
    })
    .catch((err) => {
      t.fail(err);
      t.end();
    });
});
