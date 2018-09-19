import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components";

import { MealPage, MealsListPage, BasketPage, CheckoutPage } from "./pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={MealsListPage} />
            <Route exact path="/mealInfo/:mealId" component={MealPage} />
            <Route exact path="/basket" component={BasketPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
