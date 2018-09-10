import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import About from "./components/About";
import Community from "./components/Community";
import Work from "./components/Work";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/community" component={Community} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<Router />, document.getElementById("app"));
