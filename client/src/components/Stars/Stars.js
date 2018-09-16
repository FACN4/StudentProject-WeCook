import React from "react";
import PropTypes from "prop-types";
import { StarCreator } from "./Stars.style";

const Stars = props => {
  const StarNumber = StarCreator(props.rating);

  return (
    <React.Fragment>
      <StarNumber />
    </React.Fragment>
  );
};

Stars.propTypes = {
  rating: PropTypes.number
};

export default Stars;
