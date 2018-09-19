const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const controllers = require('./controllers/index.js');

const app = express();
app.use(require('body-parser').text());

app.set('port', process.env.PORT || 5000);

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.use(controllers);

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });
}

module.exports = app;
