import React, { Component } from "react";
import {Header, Footer, MoneyButton, MealCard} from "../../components";

export default class MealListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>My React App!</h1>
        <MealCard />
        <MoneyButton />
        <Footer />
      </React.Fragment>
    );
  }
}
