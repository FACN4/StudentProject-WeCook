import React from "react";
import PropTypes from "prop-types";
import {StarCreator} from './Stars.style.js'

const Stars = props => {
  const StarNumber = StarCreator(50);

  return (
    <React.Fragment>
    <StarNumber />
  </React.Fragment>
  );
};

Stars.propTypes = {
  starCount: PropTypes.number
};


export default Stars;
