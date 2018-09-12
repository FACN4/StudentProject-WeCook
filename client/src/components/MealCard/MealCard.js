import React from "react";
import {
  StyledMealCard,
  MealDescription,
  MealDetails,
  MealCardReview,
  Price,
  CookDetails
} from "./MealCard.style";

import mealImage from "../../assets/meal_image.png";
import cookProfileImage from "../../assets/cook_profile_img.png";

const MealCard = () => (
  <StyledMealCard>
    <img src={mealImage} alt="Meal Image" />
    <MealDescription>
      <MealDetails>
        <a href="">Name of Meal</a>
        <MealCardReview />
        <Price>Price: £10.00</Price>
      </MealDetails>
      <CookDetails>
        <img src={cookProfileImage} alt="Cook Image" />
        By Mama Afifi
      </CookDetails>
    </MealDescription>
  </StyledMealCard>
);

export default MealCard;
