import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getMealCookInfo from "../../../../actions/getMealCookInfo";
import {
  H2,
  Contact,
  Description,
  CookInfo,
  Details,
  CookImage,
  CookName
} from "./MealCookInfo.style";

class MealCookInfo extends Component {
  componentDidMount() {
    this.props.getMealCookInfo(this.props.mealId);
  }
  render() {
    if (!this.props.mealCookInfo.isFulfilled) return <h1>Loading</h1>;
    const {
      cook_firstname,
      cook_summary,
      cook_description,
      cook_image_url
    } = this.props.mealCookInfo.data;
    return (
      <section>
        <H2>About The Cook</H2>
        <CookInfo>
          <CookImage src={cook_image_url} alt="cook image" />
          <Details>
            <CookName>{cook_firstname}</CookName>
            <Description>{cook_summary}</Description>
          </Details>
        </CookInfo>
        <span>{cook_description}</span>
        <Contact>Contact Cook</Contact>
      </section>
    );
  }
}
MealCookInfo.propTypes = {
  getMealCookInfo: PropTypes.func,
  mealId: PropTypes.string,
  mealCookInfo: PropTypes.shape({
    data: PropTypes.shape({
      cook_firstname: PropTypes.string,
      cook_lastname: PropTypes.string,
      cook_summary: PropTypes.string,
      cook_description: PropTypes.string,
      is_thumbnail: PropTypes.arr
    }),
    isRejected: PropTypes.bool,
    isFulfilled: PropTypes.bool,
    isPending: PropTypes.bool,
    error: PropTypes.string
  })
};
const mapStateToProps = ({ mealCookData }) => ({
  mealCookInfo: mealCookData
});
const mapDispatchToProps = {
  getMealCookInfo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealCookInfo);
