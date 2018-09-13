import React from "react";
import { StyledMealCard, MealDescription } from "./MealCard.style";

const MealCard = props => (
  <StyledMealCard>
    <img src={props.mealImage} alt="Meal Image" />
    <MealDescription>{props.children}</MealDescription>
  </StyledMealCard>
);

export default MealCard;
