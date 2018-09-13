import React from "react";
import PropTypes from "prop-types";
import { MoneyButton } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";

export default class MealPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MealInfo />
        <MoneyButton />
      </React.Fragment>
    );
  }
}

MealPage.propTypes = {
  match: PropTypes.object
};
