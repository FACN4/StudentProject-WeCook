import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import ThankYou from "../ThankYou/ThankYou";


class CheckoutForm extends Component {
  state = {
    complete: false,
    error: ""
  };
  submit = event => {
    this.props.stripe
      .createToken({ name: "Name" })
      .then(res => {
        return axios({
          url: "/api/charge",
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          data: res.token.id
        });
      })
      .then(res => {
        if (res.statusText === "OK") {
          this.setState({ complete: true });
        }
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
  render() {
    if (this.state.complete) return <ThankYou />;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
