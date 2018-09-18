import React from "react";
import PropTypes from "prop-types";
import { MoneyButton } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";
import MealCookInfo from "./sections/MealCookInfo/MealCookInfo";
import MealReviews from "./sections/MealReviews/MealReviews";
import { SectionDivider } from "./MealPageStyle";

const MealPage = props => {
  return (
    <React.Fragment>
      <MealInfo mealId={props.match.params.mealId} />
      <SectionDivider />
      <MealCookInfo mealId={props.match.params.mealId} />
      <SectionDivider />
      <MealReviews mealId={props.match.params.mealId} />
      <MoneyButton />
    </React.Fragment>
  );
};

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
