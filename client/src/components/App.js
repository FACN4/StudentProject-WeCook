import React, { Component } from "react";
const { Link } = require("react-router-dom");
import { Provider } from "react-redux";
import store from "./../store";
import MoneyButton from "./MoneyButton";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <h1>My React App!</h1>
          <Link to="/about">About</Link>
          <MoneyButton />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
