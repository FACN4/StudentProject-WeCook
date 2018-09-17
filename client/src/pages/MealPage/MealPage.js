import React from "react";
import PropTypes from "prop-types";
import { MoneyButton } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";
import CookInfo from "./sections/CookInfo/CookInfo";

const MealPage = props => {
  return (
    <React.Fragment>
      <MealInfo mealId={props.match.params.mealId} />
      <CookInfo cookMealId={props.match.params.mealId} />
      <MoneyButton />
    </React.Fragment>
  );
};

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
