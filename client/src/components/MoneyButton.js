import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import addToBasket from '../actions/addToBasket'

class MoneyButton extends Component {
  render() {
    return (
      <button onClick={this.props.addToBasket}>Add to basket</button>
    );
  }
}

MoneyButton.propTypes = {
  addToBasket: PropTypes.func.isRequired
}

export default connect(null, {addToBasket})(MoneyButton);
