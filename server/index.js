const http = require('http');
const { app } = require('./app');

http.createServer(app).listen(app.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log('App running on port', app.get('PORT'));
});
