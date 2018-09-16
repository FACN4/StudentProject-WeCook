import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Gallery } from "../../../../components";
import getMealInfo from "../../../../actions/getMealInfo";
import timeRemaining from "../../../../utils/formatingLogic";

class MealInfo extends Component {
  componentDidMount() {
    this.props.getMealInfo(this.props.mealId);
  }
  render() {
    if (!this.props.mealInfo.isFulfilled) return <h1>Loading</h1>;
    const {
      meal_title,
      description,
      price,
      meal_scheduled_at,
      remaining_portions,
      final_booking_at,
      ingredients,
      tags,
      meal_image_url
    } = this.props.mealInfo.data;

    const deadline = timeRemaining(new Date(final_booking_at) - Date.now());
    // changed object key mealUrl to imageUrl in order to make gallery re-usable for cooks
    const mealImages = meal_image_url.map(obj => {
      return { ...obj, imageUrl: obj.mealUrl };
    });
    return (
      <section>
        <h1>{meal_title}</h1>
        <div>
          <span>{meal_scheduled_at}</span>
          <span>{"£" + price + "per serving"}</span>
          <span>{deadline}</span>
          <span>{remaining_portions} servings left</span>
        </div>
        <Gallery images={mealImages} />
        <p>{description}</p>
        <div>{ingredients.join(", ")}</div>
        <div> {tags.join(", ")}</div>
      </section>
    );
  }
}

MealInfo.propTypes = {
  getMealInfo: PropTypes.func,
  mealInfo: PropTypes.shape({
    data: PropTypes.shape({
      meal_title: PropTypes.string,
      price: PropTypes.string,
      meal_scheduled_at: PropTypes.string,
      description: PropTypes.string,
      remaining_portions: PropTypes.number,
      final_booking_at: PropTypes.string,
      ingredients: PropTypes.arr,
      tags: PropTypes.arr,
      meal_image_url: PropTypes.arr
    }),
    isRejected: PropTypes.bool,
    isFulfilled: PropTypes.bool,
    isPending: PropTypes.bool,
    error: PropTypes.string
  }),
  mealId: PropTypes.string
};

const mapDispatchToProps = {
  getMealInfo
};

const mapStateToProps = ({ mealData }) => ({
  mealInfo: mealData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealInfo);
