import React, { Component } from "react";
import { OrderDescription, H2, OrderDetails, Address } from "./ThankYou.style";

class ThankYou extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Thank you for your order</h1>;
        <OrderDescription>
          <p>
            Hi Paul, we’ve received your order #1223003 and we are passing it
            onto Mama Afifi.
          </p>
          <p>We’ll email you an update when the meal is on the way.</p>
          <H2>Order Details</H2>
          <OrderDetails>Order #1223003 for 7pm on 22/09/18</OrderDetails>
          Deliver to: <Address>Paul O’Connor</Address>
          <Address>28 Fernbank Mews</Address>
          <Address>Clapham</Address> <Address>SW129NJ</Address>
        </OrderDescription>
      </React.Fragment>
    );
  }
}

export default ThankYou;
