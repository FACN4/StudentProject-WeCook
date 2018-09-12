import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MealPage, MealsListPage, BasketPage } from "./pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MealsListPage} />
          <Route exact path="/mealInfo" component={MealPage} />
          <Route exact path="/basket" component={BasketPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
