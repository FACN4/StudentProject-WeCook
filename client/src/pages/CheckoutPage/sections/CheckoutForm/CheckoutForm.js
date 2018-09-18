import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false, error: "" };
    this.submit = this.submit.bind(this);
  }
  submit(event) {
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
  }
  render() {
    if (this.state.complete) return <h1>Order Succesful</h1>;
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