import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Gallery, Loading } from "../../../../components";
import getMealInfo from "../../../../actions/getMealInfo";
import timeRemaining from "../../../../utils/formatingLogic";
import {
  MealLogistics,
  Price,
  Deadline,
  RemainingPortions,
  MealScheduled,
  Description,
  H2,
  Tag,
  TagHeader
} from "./MealInfo.style";

class MealInfo extends Component {
  componentDidMount() {
    this.props.getMealInfo(this.props.mealId);
  }
  render() {
    if (!this.props.mealInfo.isFulfilled) return <Loading />;
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
      <React.Fragment>
        <h1>{meal_title}</h1>
        <MealLogistics>
          <MealScheduled>{meal_scheduled_at}</MealScheduled>
          <Price>{"£" + price + "per serving"}</Price>
          <Deadline>{deadline}</Deadline>
          <RemainingPortions>
            {remaining_portions} servings left
          </RemainingPortions>
        </MealLogistics>
        <Gallery images={mealImages} />
        <Description>{description}</Description>
        <H2>Ingredients</H2>
        <Description>{ingredients.join(", ")}</Description>
        <TagHeader>Tags</TagHeader>
        {tags.map(tags => <Tag key={tags}>{tags}</Tag>)}
      </React.Fragment>
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

const mapStateToProps = ({ mealData }) => ({
  mealInfo: mealData
});

const mapDispatchToProps = {
  getMealInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealInfo);
