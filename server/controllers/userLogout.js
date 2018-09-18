exports.get = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).send('User logged out');
};
