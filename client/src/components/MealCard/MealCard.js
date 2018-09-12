import React from "react";
import { Link } from "react-router-dom";
import {
  StyledMealCard,
  MealDescription,
  MealDetails,
  MealCardReview,
  TimeRemaning,
  CookDetails
} from "./MealCard.style";

import mealImage from "../../assets/meal_image.png";
import reviewImage from "../../assets/stars.png";
import cookProfileImage from "../../assets/cook_profile_img.png";

const MealCard = () => (
  <StyledMealCard>
    <img src={mealImage} alt="Meal Image" />
    <MealDescription>
      <MealDetails>
        <Link to="/about">Name of Meal</Link>
        <MealCardReview>
          <img src={reviewImage} alt="Review Image" />
          40 reviews
        </MealCardReview>
        £10.00/serving <TimeRemaning>2 hours to buy</TimeRemaning>
      </MealDetails>
      <CookDetails>
        <img src={cookProfileImage} alt="Cook Image" />
        By Mama Afifi
      </CookDetails>
    </MealDescription>
  </StyledMealCard>
);

export default MealCard;
