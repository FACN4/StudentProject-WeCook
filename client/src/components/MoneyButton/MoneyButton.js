import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Order, Price, MoneyButtonWrapper } from "./MoneyButton.style";

import addToBasket from "../../actions/addToBasket";

const MoneyButton = props => (
  <MoneyButtonWrapper>
    <Order>
      <Price>Price: £{props.mealInfo.price}.</Price>
      <button onClick={() => props.addToBasket(props.mealId, props.mealInfo)}>
        Add to Basket item
      </button>
    </Order>
  </MoneyButtonWrapper>
);

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  mealId: PropTypes.number
};

export default connect(
  null,
  { addToBasket }
)(MoneyButton);
