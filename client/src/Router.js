import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader'

import { MealPage, MealsListPage, BasketPage, HomePage } from "./pages";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mealList" component={MealsListPage} />
            <Route exact path="/mealInfo/:mealId" component={MealPage} />
            <Route exact path="/basket" component={BasketPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default hot(module)(Router)
