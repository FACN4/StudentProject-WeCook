import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.style";
import MoneyButton from "./components/MoneyButton/MoneyButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import wecookTheme from "./themes/weCookv1";

import store from "./store";

const { Link } = require("react-router-dom");

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={wecookTheme}>
          <React.Fragment>
            <Header />
            <h1>My React App!</h1>
            <Link to="/about">About</Link>
            <MoneyButton />
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
