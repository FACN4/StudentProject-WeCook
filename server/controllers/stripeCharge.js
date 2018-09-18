const { stripe } = require('../app.js');

exports.post = async (req, res) => {
  try {
    const { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body,
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
};
