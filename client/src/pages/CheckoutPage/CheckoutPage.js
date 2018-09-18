import React, { Component } from "react";
import { CardElement, Elements, StripeProvider } from "react-stripe-elements";
import { CookDetails } from "./CheckoutPage.style";
import Card from "./sections/Card/Card";

export default class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
    if (response.ok) console.log("Purchase Complete!");
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    return (
      <StripeProvider apiKey="pk_test_VBXwCb3z3gLk9sqeWpPfeFLA">
        <Elements>
          <Card />
        </Elements>
      </StripeProvider>
    );
  }
}
