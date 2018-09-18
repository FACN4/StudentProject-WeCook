import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getMealReviews from "../../../../actions/getMealReviews";
import { H2, H3, ReviewDate, Description } from "./MealReview.style";

class MealPage extends Component {
  componentDidMount() {
    this.props.getMealReviews(this.props.mealId);
  }
  organiseReviews = (reviewsArray, pageMealId) => {
    return reviewsArray.reduce(
      (acc, reviewEle, index) => {
        let {
          meal_id: mealId,
          star_rating,
          username,
          reviewed_at,
          review_msg
        } = reviewEle;
        let Review = (
          <article key={index}>
            <H3>{username}</H3>
            <h3>{star_rating}</h3>
            <ReviewDate>{reviewed_at}</ReviewDate>
            <Description>{review_msg}</Description>
          </article>
        );
        if (mealId === Number(pageMealId)) {
          return { ...acc, mealReviews: [...acc.mealReviews, Review] };
        } else {
          return { ...acc, cookReviews: [...acc.cookReviews, Review] };
        }
      },
      { mealReviews: [], cookReviews: [] }
    );
  };
  render() {
    if (!this.props.mealReviews.isFulfilled) return <h1>Loading</h1>;
    const { mealReviews, cookReviews } = this.organiseReviews(
      this.props.mealReviews.data,
      this.props.mealId
    );

    let MealReviews = null;
    let CookReviews = null;
    if (mealReviews.length > 0) {
      MealReviews = (
        <React.Fragment>
          <H2>Meal Reviews</H2>
          {mealReviews}
        </React.Fragment>
      );
    }
    if (cookReviews.length > 0) {
      CookReviews = (
        <React.Fragment>
          <H2>Cook Reviews</H2>
          {cookReviews}
        </React.Fragment>
      );
    }
    return (
      <section>
        {MealReviews}
        {CookReviews}
      </section>
    );
  }
}

MealPage.propTypes = {
  getMealReviews: PropTypes.func,
  mealId: PropTypes.string,
  mealReviews: PropTypes.shape({
    data: PropTypes.array,
    isFulfilled: PropTypes.bool
  })
};

const mapStateToProps = ({ mealReviews }) => ({
  mealReviews: mealReviews
});

const mapDispatchToProps = {
  getMealReviews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealPage);
