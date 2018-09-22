const { STRIPE_KEY } = process.env;
const stripe = require('stripe')(STRIPE_KEY);

exports.post = (req, res) => {
  stripe.charges
    .create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body,
    })
    .then(result => res.status(200).send(result.status))
    .catch(err => res.status(500).end(err));
};
