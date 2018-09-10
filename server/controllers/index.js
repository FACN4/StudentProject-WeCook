const express = require('express');

const router = express.Router();


router.get('/api', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.url);
  res.send('Hello world!');
});

module.exports = router;
