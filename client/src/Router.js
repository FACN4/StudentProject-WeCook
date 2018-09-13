import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components";

import { MealPage, MealsListPage, BasketPage } from "./pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={MealsListPage} />
            <Route exact path="/mealInfo" component={MealPage} />
            <Route exact path="/basket" component={BasketPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
