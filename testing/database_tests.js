const test = require('tape');
const pgp = require('pg-promise')();
const { db } = require('./../server/database/db_connection');

const { emptyTables, dummyData } = require('./../server/database/db_build');
const {
  getMealCard, getMealInfo, getCookInfo, getCookReviews,
} = require('../server/database/getQueries');

const {
  mealCardResult, mealInfoResult, cookInfoResult, cookReviewsResult,
} = require('./testDummyData');

let counter = 0;
const disconnectPG = () => {
  counter += 1;
  if (counter === 2) {
    pgp.end();
  }
};

test('--------database_tests.js-------', (t) => {
  t.pass('Tape is working');
  t.equal(process.env.NODE_ENV, 'test', 'the process.env.NODE_env enviroment should be test');
  t.end();
});

test('DB build tests', (t) => {
  db.none(emptyTables)
    .then(() => {
      t.pass('build emptyTables works with no errors');
    })
    .then(() => db.none(dummyData))
    .then(() => {
      t.pass('filling DB with dummy data works with no errors');
    })
    .catch(t.fail)
    .then(disconnectPG)
    .then(t.end);
});

test('getQueries are working', (t) => {
  db.none(emptyTables)
    .then(() => {
      t.pass('build emptyTables works with no errors');
    })
    .then(() => db.none(dummyData))
    .then(() => {
      t.pass('filling DB with dummy data works with no errors');
    })
    .then(() => getMealCard(1))
    .then((row) => {
      t.deepEqual(row, mealCardResult, 'getMealCard should return preset data');
    })
    .then(() => getMealInfo(1))
    .then((row) => {
      t.deepEqual(row, mealInfoResult, 'getMealInfo should return preset data');
    })
    .then(() => getCookInfo(1))
    .then((row) => {
      t.deepEqual(row, cookInfoResult, 'getCookInfo should return preset data');
    })
    .then(() => getCookReviews(1))
    .then((rows) => {
      const removedStaticDates = rows.map(row => ({ ...row, reviewed_at: 'Date Not Static' }));
      t.deepEqual(removedStaticDates, cookReviewsResult, 'getCookReviews should return preset data');
    })
    .catch(t.fail)
    .then(disconnectPG)
    .then(t.end);
});
