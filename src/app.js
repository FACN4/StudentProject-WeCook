const express = require('express');
const controllers = require('./controllers/index.js');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(controllers);
module.exports = app;
