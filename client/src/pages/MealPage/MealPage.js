import React from "react";
import PropTypes from "prop-types";
import MealInfo from "./sections/MealInfo/MealInfo";
import MealReviews from "./sections/MealReviews/MealReviews";

const MealPage = props => {
  return (
    <React.Fragment>
      <MealInfo mealId={props.match.params.mealId} />
      <MealReviews mealId={props.match.params.mealId} />
    </React.Fragment>
  );
};

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
