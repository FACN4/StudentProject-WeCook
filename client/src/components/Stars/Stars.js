import React from "react";
import PropTypes from "prop-types";
import './Stars.style.css'

const Stars = props => {

  return (<span className="rating-static rating-25"></span>);
};

Stars.propTypes = {
  starCount: PropTypes.number
};

export default Stars;
