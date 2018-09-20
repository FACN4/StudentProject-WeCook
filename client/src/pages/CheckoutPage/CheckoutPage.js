import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { connect } from "react-redux";

import CheckoutForm from "./sections/CheckoutForm/CheckoutForm";
import getConfirmationData from "../../actions/getConfirmationData"
import {Loading} from "../../components"


class CheckoutPage extends Component {
  componentDidMount () {
    this.props.getConfirmationData();
  }
  render() {
    if(!this.props.confirmationData.isFulfilled) return <Loading />
    const {basket, confirmationData} = this.props
    return (
      <StripeProvider apiKey={process.env.STRIPE_API_KEY}>
        <Elements>
          <CheckoutForm basket={basket} confirmationData={confirmationData}/>
        </Elements>
      </StripeProvider>
    );
  }
}

const mapStateToProps = ({ basket, confirmationData }) => ({
  basket: basket,
  confirmationData: confirmationData
});

const mapDispatchToProps = {
  getConfirmationData
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
