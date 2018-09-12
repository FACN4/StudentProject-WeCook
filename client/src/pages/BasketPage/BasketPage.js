import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, MoneyButton, MealCard } from "../../components";

import mealImage from "../../assets/meal_image.png";
import reviewImage from "../../assets/stars.png";
import cookProfileImage from "../../assets/cook_profile_img.png";

export default class MealListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Your Basket</h1>
        <MealCard mealImage={mealImage}>
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
        </MealCard>
        <MoneyButton />
        <Footer />
      </React.Fragment>
    );
  }
}
