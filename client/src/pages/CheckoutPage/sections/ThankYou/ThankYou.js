import React, { Component } from "react";
import {
  OrderDescription,
  H2,
  OrderDetails,
  Address,
  ThankyouWrapper
} from "./ThankYou.style";
import { Header, Footer, FooterWrapper } from "../../../../components";

class ThankYou extends Component {
  render() {
    return (
      <React.Fragment>
        <FooterWrapper>
        <Header />
        <ThankyouWrapper>
          <h1>Thank you for your order</h1>
          <OrderDescription>
            <p>
              Hi FAC, we’ve received your order #1223003 and we are passing it
              onto Mama Afifi.
            </p>
            <p>We’ll email you an update when the meal is on the way.</p>
            <H2>Order Details</H2>
            <OrderDetails>Order #1223003 for 7pm on 21/09/18</OrderDetails>
            Deliver to: <Address>FAC</Address>
            <Address>12</Address>
            <Address>N19 4AH</Address> <Address>London</Address>
          </OrderDescription>
        </ThankyouWrapper>
      </FooterWrapper>
      <Footer />
      </React.Fragment>
    );
  }
}

export default ThankYou;
