import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import timeRemaining from "../../utils/formatingLogic";
import { MealCard, Header, Stars } from "../../components";
import {
  MealList,
  MealDetails,
  MealCardReview,
  TimeRemaning,
  MealSection,
  CookDetails
} from "./MealsListPage.style";

class MealListPage extends Component {
  render() {
    if (!this.props.mealList.isFulfilled) return <h1>Loading</h1>;
    const mealCount = this.props.mealList.data.length;
    return (
      <React.Fragment>
        <Header />
        <h1>{mealCount} menus available in your local area for this date</h1>
        <MealList>
          {this.props.mealList.data.map(meal => {
            const deadline = timeRemaining(
              new Date(meal.final_booking_at) - Date.now()
            );
            const rating = Number(meal.avg_star_rating) * 10;
            const meal_link = `/mealInfo/${meal.id}`;
            return (
              <MealCard
                key={meal.id}
                mealImage={meal.meal_image_url}
                link={meal_link}
              >
                <MealSection>
                  <MealDetails>
                    <Link to={meal_link}>{meal.meal_title}</Link>
                    <MealCardReview>
                      <Stars rating={rating} />
                      <span>{meal.count_reviews} reviews</span>
                    </MealCardReview>
                    £{meal.price}/serving{" "}
                    <TimeRemaning>{deadline}</TimeRemaning>
                  </MealDetails>
                  <CookDetails>
                    <img src={meal.cook_image_url} alt={meal.cook_firstname} />
                    By {meal.cook_firstname}
                  </CookDetails>
                </MealSection>
              </MealCard>
            );
          })};
        </MealList>
      </React.Fragment>
    );
  }
}

MealListPage.propTypes = {
  getMealList: PropTypes.func,
  mealList: PropTypes.shape({
    data: mealPropType,
    isFulfilled: PropTypes.bool
  }),
  isRejected: PropTypes.bool,
  isFulfilled: PropTypes.bool,
  isPending: PropTypes.bool,
  error: PropTypes.string
};

const mealPropType = PropTypes.shape({
  id: PropTypes.string,
  meal_title: PropTypes.string,
  count_review: PropTypes.string,
  price: PropTypes.string,
  final_booking_at: PropTypes.string,
  meal_image_url: PropTypes.arr,
  avg_star_rating: PropTypes.string
});

const mapStateToProps = ({ mealList }) => ({
  mealList: mealList
});

export default connect(
  mapStateToProps,
  null
)(MealListPage);
