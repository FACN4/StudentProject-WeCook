import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class Card extends Component {
  render() {
    return (
      <form
        onSubmit={() =>
          this.props.stripe.createToken().then(payload => console.log(payload))
        }
      >
        <label>
          Card details
          <CardElement />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}

export default injectStripe(Card);
