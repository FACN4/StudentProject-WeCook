import React, { Component } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import { App } from './App';

import { GlobalStyle } from "./App.style"; // eslint-disable-line no-unused-vars
import wecookTheme from "./themes/weCookv1";

import Router from "./Router"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={wecookTheme}>
        
          <Router />
        </ThemeProvider>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
