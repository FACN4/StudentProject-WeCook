import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MealPage, MealsListPage } from "./pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MealsListPage} />
          <Route exact path="/mealInfo" component={MealPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
