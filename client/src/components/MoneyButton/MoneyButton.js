import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Order, Price } from "./MoneyButton.style";

import addToBasket from "../../actions/addToBasket";

class MoneyButton extends Component {
  render() {
    return (
      <Order>
        <Price>Price: £10.00</Price>
        <button onClick={this.props.addToBasket}>Add to Basket</button>
      </Order>
    );
  }
}

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired
};

export default connect(
  null,
  { addToBasket }
)(MoneyButton);
