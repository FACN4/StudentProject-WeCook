const { postCreateUser } = require('../database/postQueries/postCreateUser');

exports.post = (req, res) => {
  console.log(req.body);
  //hashPassword
  postCreateUser(req.body)
    .then(row => res.send(row))
    .catch(() => res.status('500').send('Sorry, could not fetch meals'));
};
