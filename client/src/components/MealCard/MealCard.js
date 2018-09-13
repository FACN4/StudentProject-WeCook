import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

export default MealCard;
