import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import CheckoutForm from "./sections/CheckoutForm/CheckoutForm";

require("env2")("./.env");

const { STRIPE_API_KEY } = process.env;

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default CheckoutPage;
