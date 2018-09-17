import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Order, Price } from "./MoneyButton.style";

import addToBasket from "../../actions/addToBasket";

const MoneyButton = props => (
  <React.Fragment>
    <Order>
      <Price>Price: £{props.mealInfo.price}</Price>
      <button onClick={() => props.addToBasket(props.mealInfo)}>
        Add to Basket
      </button>
    </Order>
  </React.Fragment>
);

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  mealId: PropTypes.number
};

export default connect(
  null,
  { addToBasket }
)(MoneyButton);
