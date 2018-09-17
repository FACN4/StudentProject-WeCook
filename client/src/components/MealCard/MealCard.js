import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledMealCard, MealDescription, MealImage } from "./MealCard.style";

const MealCard = props => (
  <StyledMealCard>
    {props.link ? (
      <Link to={props.link}>
        <MealImage src={props.mealImage} alt="Meal Image" />
      </Link>
    ) : (
      <MealImage src={props.mealImage} alt="Meal Image" />
    )}
    <MealDescription>{props.children}</MealDescription>
  </StyledMealCard>
);

MealCard.propTypes = {
  link: PropTypes.string,
  mealImage: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default MealCard;
