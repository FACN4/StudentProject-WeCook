import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import timeRemaining from "../../utils/formatingLogic";
import getMealList from "../../actions/getMealList";
import { Footer, MealCard } from "../../components";
import {
  MealList,
  MealDetails,
  MealCardReview,
  TimeRemaning,
  MealSection,
  CookDetails
} from "./MealsListPage.style";

import reviewImage from "../../assets/stars.png";

class MealListPage extends Component {
  componentDidMount() {
    this.props.getMealList();
  }
  render() {
    if (this.props.mealList.status !== "Fulfilled") return <h1>Loading</h1>;
    const {
      id,
      meal_image_url,
      meal_title,
      price,
      final_booking_at,
      cook_firstname,
      cook_image_url,
      count_reviews
    } = this.props.mealList.mealList[0];
    const deadline = timeRemaining(new Date(final_booking_at) - Date.now());
    const meal_link = `/mealInfo/${id}`;
    const mealCount = this.props.mealList.mealList.length;
    return (
      <React.Fragment>
        <h1>{mealCount} menus available in your local area for this date</h1>
        <MealList>
          <MealCard mealImage={meal_image_url} link={meal_link}>
            <MealSection>
              <MealDetails>
                <Link to={meal_link}>{meal_title}</Link>
                <MealCardReview>
                  <img src={reviewImage} alt="Review Image" />
                  {count_reviews} reviews
                </MealCardReview>
                £{price}/serving <TimeRemaning>{deadline}</TimeRemaning>
              </MealDetails>
              <CookDetails>
                <img src={cook_image_url} alt={cook_firstname} />
                By {cook_firstname}
              </CookDetails>
            </MealSection>
          </MealCard>
        </MealList>
        <Footer />
      </React.Fragment>
    );
  }
}

MealListPage.propTypes = {
  getMealList: PropTypes.func,
  mealList: PropTypes.shape({
    mealList: propTypeLol,
    status: PropTypes.string
  })
};

const propTypeLol = PropTypes.shape({
  id: PropTypes.string,
  meal_title: PropTypes.string,
  count_review: PropTypes.string,
  price: PropTypes.string,
  final_booking_at: PropTypes.string,
  meal_image_url: PropTypes.arr
});

const mapDispatchToProps = {
  getMealList
};

const mapStateToProps = ({ mealList }) => ({
  mealList: mealList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealListPage);
