import React from "react";
import {Header, MoneyButton} from '../../components'
import MealInfo from './sections/MealInfo/MealInfo'

export default class MealPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MealInfo />
        <MoneyButton />
      </React.Fragment>
    );
  }
}
