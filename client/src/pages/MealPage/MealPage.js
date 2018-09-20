import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MoneyButton, Header, FooterWrapper } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";
import MealCookInfo from "./sections/MealCookInfo/MealCookInfo";
import MealReviews from "./sections/MealReviews/MealReviews";
import { SectionDivider, MealPageWrapper } from "./MealPage.style";

class MealPage extends Component {
  render() {
    const {
      match: {
        params: { mealId }
      }
    } = this.props;
    return (
      <FooterWrapper>
          <Header />
          <MealPageWrapper>
            <MealInfo mealId={mealId} />
            <SectionDivider />
            <MealCookInfo mealId={mealId} />
            <SectionDivider />
            <MealReviews mealId={mealId} />
          </MealPageWrapper>
        {this.props.mealInfo.isFulfilled && (
          <MoneyButton
            type="add"
            mealInfo={this.props.mealInfo.data}
            mealId={mealId}
          />
        )}
      </FooterWrapper>
    );
  }
}

MealPage.propTypes = {
  match: PropTypes.object,
  mealInfo: PropTypes.shape({
    isFulfilled: PropTypes.bool,
    data: PropTypes.object
  })
};

const mapStateToProps = ({ mealData }) => ({
  mealInfo: mealData
});

export default connect(
  mapStateToProps,
  null
)(MealPage);
