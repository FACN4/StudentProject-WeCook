import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
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
            <Route exact path="/login"
              render={() => (this.props.loggedIn ? (<Redirect to="/basket"/>):(<LoginPage />))}
            />
            <Route exact path="/register"
              render={() => (this.props.loggedIn ? (<Redirect to="/basket"/>):(<RegisterPage />))}
            />
            <Route exact path="/checkout"
              render={() => (this.props.loggedIn ? (<CheckoutPage />) : (<Redirect to="/login"/>))}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  loggedIn: PropTypes.bool,
};

const mapStateToProps = ({userStatus:{loggedIn}}) => ({loggedIn:loggedIn})

const connectedRouter = connect(
  mapStateToProps,
  null
)(Router);

export default hot(module)(connectedRouter);
