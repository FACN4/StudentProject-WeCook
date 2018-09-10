const express = require('express');
const controllers = require('./controllers/index.js');

const app = express();
app.set('PORT', process.env.PORT || 5000);

app.use(controllers);
module.exports = app;
