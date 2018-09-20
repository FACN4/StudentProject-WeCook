import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import priceFormat from "../../utils/priceFormat";
import {
  Order,
  Price,
  MoneyButtonWrapper,
  Checkout,
  AddToBasket
} from "./MoneyButton.style";

import addToBasket from "../../actions/addToBasket";

class MoneyButton extends Component {
  goToCheckout = () => {
    this.props.history.push('/checkout')
  }
  render() {
    return (
      <MoneyButtonWrapper>
        {this.props.type === "add" ? (
          <Order>
            <Price>Price: £{this.props.mealInfo.price}.</Price>
            <AddToBasket
              onClick={() =>
                this.props.addToBasket(this.props.mealId, this.props.mealInfo)
              }
            >
              Add to Basket item
            </AddToBasket>
          </Order>
        ) : (
          <Order>
            <Price>Total: £{priceFormat(this.props.total)}</Price>
            <Checkout onClick={() => this.goToCheckout()}>Checkout</Checkout>
          </Order>
        )}
      </MoneyButtonWrapper>
    );
  }
}

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  mealId: PropTypes.string,
  mealInfo: PropTypes.any,
  type: PropTypes.string
};

export default connect(
  null,
  { addToBasket }
)(MoneyButton);
