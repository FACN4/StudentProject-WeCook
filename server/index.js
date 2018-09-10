const fs = require('fs');
const https = require('https');
const app = require('./app');

const privateKey = fs.readFileSync('./security/server.key');
const certificate = fs.readFileSync('./security/server.crt');

https.createServer({
  key: privateKey,
  cert: certificate,
}, app).listen(app.get('PORT'), () => {
  console.log('App running on port', app.get('PORT'));
});
