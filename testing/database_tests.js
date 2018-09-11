const test = require('tape');
const { db } = require('./../server/database/db_connection');
const { emptyTables, dummyData } = require('./../server/database/db_build');
const { getMealCardData } = require('../server/database/getQueries/mealCardData');
const { mealCardDataResult, mealInfoDataResult } = require('./testDummyData');
const { getMealInfoData } = require('../server/database/getQueries/mealInfoData');

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
    })
    .then(() => getMealCardData(1))
    .then((row) => {
      t.deepEqual(row, mealCardDataResult, 'getMealCardData should return preset data');
    })
    .then(() => getMealInfoData(1))
    .then((row) => {
      t.deepEqual(row, mealInfoDataResult, 'mealInfoData should return preset data');
    })
    .catch(t.fail)
    .then(t.end);
});
