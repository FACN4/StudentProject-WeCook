import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledMealCard, MealDescription, MealImage } from "./MealCard.style";

const MealCard = props => (
  <StyledMealCard>
    <Link to={props.link}>
      <MealImage src={props.mealImage} alt="Meal Image" />
    </Link>
    <MealDescription>{props.children}</MealDescription>
  </StyledMealCard>
);

MealCard.propTypes = {
  link: PropTypes.string,
  mealImage: PropTypes.string,
  children: PropTypes.object
};

export default MealCard;
