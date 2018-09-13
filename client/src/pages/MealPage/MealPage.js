import React from "react";
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
