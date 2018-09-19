import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import CheckoutForm from "./sections/CheckoutForm/CheckoutForm";

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.STRIPE_API_KEY}>
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default CheckoutPage;
