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
    const {match:{params:{mealId}}} = this.props
    return (
      <React.Fragment>
        <Header />
        <MealInfo mealId={mealId} />
        <SectionDivider />
        <MealCookInfo mealId={mealId} />
        <SectionDivider />
        <MealReviews mealId={mealId} />
        {this.props.mealInfo.isFulfilled && (
          <MoneyButton
            type="add"
            mealInfo={this.props.mealInfo.data}
            mealId={mealId}
          />
        )}
      </React.Fragment>
    );
  }
}

MealPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      mealId: PropTypes.string
    })
  }),
  mealInfo: PropTypes.shape({
    data: PropTypes.object,
    isFulfilled: PropTypes.bool
  })
};

const mapStateToProps = ({ mealData }) => ({
  mealInfo: mealData
});

export default connect(
  mapStateToProps,
  null
)(MealPage);
