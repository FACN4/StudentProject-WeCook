import React from "react";
import { StyledMealCard, MealDescription } from "./MealCard.style";

const MealCard = props => (
  <StyledMealCard>
    <a href="/mealInfo">
      <img src={props.mealImage} alt="Meal Image" />
    </a>
    <a href="/cookInfo">
      <img src={props.cook_images} alt="Cook image" />
    </a>
    <MealDescription>{props.children}</MealDescription>
  </StyledMealCard>
);

export default MealCard;
