import React, { Component } from "react";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store, persistor } from "./store";
import wecookTheme from "./themes/weCookv1";
import { Loading } from "./components";
import "./assets/global.css";

import Router from "./Router";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={wecookTheme}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <Router />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
