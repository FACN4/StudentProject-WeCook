import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { GlobalStyle } from "./App.style";
import MoneyButton from "./components/MoneyButton/MoneyButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import wecookTheme from "./themes/weCookv1";
import MealCard from "./components/MealCard/MealCard";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={wecookTheme}>
          <React.Fragment>
            <Header />
            <h1>My React App!</h1>
            <Link to="/about">About</Link>
            <MealCard />
            <MoneyButton />
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
