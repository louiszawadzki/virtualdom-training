import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';
import DisplayA from './components/DisplayA';
import DisplayB from './components/DisplayB';
import Button from './components/Button';

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var store = createStore(counter, 0);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <DisplayA />
            <DisplayB />
            <Button />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
