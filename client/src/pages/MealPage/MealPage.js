import React from "react";
import PropTypes from "prop-types";
import { MoneyButton } from "../../components";
import { MealPageWrapper } from "./MealPage.style";
import MealInfo from "./sections/MealInfo/MealInfo";

const MealPage = props => {
  return (
    <MealPageWrapper>
      <MealInfo mealId={props.match.params.mealId} />
      <MoneyButton />
    </MealPageWrapper>
  );
};

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
