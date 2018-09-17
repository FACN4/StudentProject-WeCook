import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Order, Price, MoneyButtonWrapper } from "./MoneyButton.style";

import addToBasket from "../../actions/addToBasket";

const MoneyButton = props => (
  <MoneyButtonWrapper>
    <Order>
      <Price>Price: £10.00</Price>
      <button onClick={props.addToBasket}>Add to Basket</button>
    </Order>
  </MoneyButtonWrapper>
);

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired
};

export default connect(
  null,
  { addToBasket }
)(MoneyButton);
