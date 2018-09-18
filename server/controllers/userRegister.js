const { postCreateUser } = require("../database/postQueries/postCreateUser");
const hashPassword = require("../utils/hashPassword");

exports.post = (req, res) => {
  const { password } = req.body;
  hashPassword(password)
    .then(hash => postCreateUser({ ...req.body, password: hash }))
    .then(row => res.send(row))
    .catch(() => res.status("500").send("Sorry, could not create account"));
};
