import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PalindromForm from "./PalindromForm";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <PalindromForm></PalindromForm>
        </div>
      </Provider>
    );
  }
}

export default App;