import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { connect } from "react-redux";

import CheckoutForm from "./sections/CheckoutForm/CheckoutForm";

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.STRIPE_API_KEY}>
        <Elements>
          <CheckoutForm basket={this.props.basket} />
        </Elements>
      </StripeProvider>
    );
  }
}

const mapStateToProps = ({ basket }) => ({
  basket: basket
});

export default connect(mapStateToProps)(CheckoutPage);
