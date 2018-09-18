import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MoneyButton, Header } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";
import MealCookInfo from "./sections/MealCookInfo/MealCookInfo";
import MealReviews from "./sections/MealReviews/MealReviews";
import { SectionDivider } from "./MealPageStyle";

class MealPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MealInfo mealId={this.props.match.params.mealId} />
        <SectionDivider />
        <MealCookInfo mealId={this.props.match.params.mealId} />
        <SectionDivider />
        <MealReviews mealId={this.props.match.params.mealId} />
        {this.props.mealInfo.isFulfilled && (
          <MoneyButton
            mealInfo={this.props.mealInfo.data}
            mealId={this.props.match.params.mealId}
          />
        )}
      </React.Fragment>
    );
  }
}

MealPage.propTypes = {
  match: PropTypes.object
};

const mapStateToProps = ({ mealData }) => ({
  mealInfo: mealData
});

export default connect(
  mapStateToProps,
  null
)(MealPage);
