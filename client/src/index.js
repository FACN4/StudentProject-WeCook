import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import About from "./components/About";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<Router />, document.getElementById("app"));
