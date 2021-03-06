require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers/index.js');

const app = express();
app.set('PORT', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.disable('x-powered-by');
app.use(controllers);

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });
}

module.exports = app;
