import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { CookDetails } from "./CheckoutPage.style";

import CheckoutForm from "./sections/CheckoutForm/CheckoutForm";

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_VBXwCb3z3gLk9sqeWpPfeFLA">
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
