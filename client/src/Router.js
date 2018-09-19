import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import {
  MealPage,
  MealsListPage,
  BasketPage,
  LoginPage,
  RegisterPage,
  CheckoutPage,
  HomePage
} from "./pages";

class Routes extends Component {
  render() {
    const {mealList} = this.props
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            {/* <Route exact path="/" render={(props) => {
              console.log(props.history);
              return ((mealList.isFulfilled && mealList.data.length > 0)? <Redirect to="/mealList"/> : <HomePage/>)}}/> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mealList" component={MealsListPage} />
            <Route exact path="/mealInfo/:mealId" component={MealPage} />
            <Route exact path="/basket" component={BasketPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ mealList }) => ({
  mealList: mealList
});

const connectedRoutes = connect(
  mapStateToProps,
  null
)(Routes);

export default hot(module)(connectedRoutes);
