import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';

import MoneyButton from './components/MoneyButton';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <React.Fragment>
        <h1>My React App</h1>
        <MoneyButton />
      </React.Fragment>
      </Provider>
    );
  }
}

export default App;
