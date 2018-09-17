import React from "react";
import PropTypes from "prop-types";
import MealInfo from "./sections/MealInfo/MealInfo";

const MealPage = props => {
  return (
    <React.Fragment>
      <MealInfo mealId={props.match.params.mealId} />
    </React.Fragment>
  );
};

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
