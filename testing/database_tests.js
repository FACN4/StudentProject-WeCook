const test = require('tape');
const pgp = require('pg-promise')();
const { db } = require('./../server/database/db_connection');

const { emptyTables, cookFillerData } = require('./../server/database/db_build');
const {
  getMealCard, getMealInfo, getCookInfo, getMealReviews,
} = require('../server/database/getQueries');

const { postCreateUser } = require('../server/database/postQueries');

const {
  mealCardResult, mealInfoResult, cookInfoResult, mealReviewsResult, userDetails,
} = require('./testPresetData');

let counter = 0;
const disconnectPG = () => {
  counter += 1;
  if (counter === 3) {
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
    .then(() => t.pass('build emptyTables works with no errors'))
    .then(() => db.none(cookFillerData))
    .then(() => t.pass('filling DB with filler data works with no errors'))
    .catch(t.fail)
    .then(disconnectPG)
    .then(t.end);
});

test('getQueries are working', (t) => {
  db.none(emptyTables)
    .then(() => db.none(cookFillerData))
    .then(() => getMealCard(1))
    .then(row => t.deepEqual(row, mealCardResult, 'getMealCard should return preset data'))
    .then(() => getMealInfo(1))
    .then(row => t.deepEqual(row, mealInfoResult, 'getMealInfo should return preset data'))
    .then(() => getCookInfo(1))
    .then(row => t.deepEqual(row, cookInfoResult, 'getCookInfo should return preset data'))
    .then(() => getMealReviews(1))
    .then((rows) => {
      const removedStaticDates = rows.map(row => ({ ...row, reviewed_at: 'Date Not Static' }));
      t.deepEqual(removedStaticDates, mealReviewsResult, 'getMealReviews should return preset data');
    })
    .catch(t.fail)
    .then(disconnectPG)
    .then(t.end);
});

test('postQueries are working', (t) => {
  db.none(emptyTables)
    .then(() => db.none(cookFillerData))
    .then(() => postCreateUser(userDetails))
    .then(() => t.pass('created a new User with no errors'))
    .catch(t.fail)
    .then(() => {
      const duplicateUsername = { ...userDetails, email: 'something@new.com' };
      return postCreateUser(duplicateUsername);
    })
    .catch(err => t.pass(err.message))
    .then(() => {
      const duplicateEmail = { ...userDetails, username: 'newName' };
      return postCreateUser(duplicateEmail);
    })
    .catch(err => t.pass(err.message))
    .then(disconnectPG)
    .then(t.end);
});
