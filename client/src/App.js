import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.style";
import MoneyButton from "./components/MoneyButton/MoneyButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import wecookTheme from "./themes/weCookv1";
import MealCard from "./components/MealCard/MealCard";
import MealList from "./App.style";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={wecookTheme}>
          <React.Fragment>
            <Header />
            <h1>23 menus available in your local area for this date</h1>
            <MealCard />
            <MealCard />
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
