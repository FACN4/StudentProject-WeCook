import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import ThankYou from "../ThankYou/ThankYou";
import "./stripe.css";
import { Header, Footer, MealCard } from "../../../../components";
import {
  CheckoutWrapper,
  Delivery,
  Paynow,
  H2,
  Address,
  CardDetails
} from "./CheckoutForm.style";

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
      <React.Fragment>
        <Header />
        <CheckoutWrapper>
          <h1>Confirm Your Order</h1>
          <Delivery>For delivery for 7pm on 22/09/18</Delivery>
          <MealCard>Testing</MealCard>
          <H2>Payment</H2>
          <CardDetails>Please enter your card details below.</CardDetails>
          <CardElement className="card-element" />
          <Paynow onClick={this.submit}>Send</Paynow>
          <p>Powered by Stripe</p>
          <H2>Delivery Address</H2>
          Deliver to: <Address>Paul O’Connor</Address>
          <Address>28 Fernbank Mews</Address>
          <Address>Clapham</Address> <Address>SW129NJ</Address>
        </CheckoutWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default injectStripe(CheckoutForm);
