import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MealPage } from "./pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MealPage} />
          <Route exact path="/mealInfo" component={MealPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
