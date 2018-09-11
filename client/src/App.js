import React, { Component } from "react";
import { Provider } from "react-redux";
// import { injectGlobal } from "styled-components";
import { GlobalStyle } from "./App.style";
import MoneyButton from "./components/MoneyButton/MoneyButton";
import Header from "./components/Header/Header";

import store from "./store";

const { Link } = require("react-router-dom");

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <h1>My React App!</h1>
          <Link to="/about">About</Link>
          <MoneyButton />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
