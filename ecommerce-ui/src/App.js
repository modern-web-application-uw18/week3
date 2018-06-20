import React, { Component } from 'react';
import './App.css';
import airbnbs from './airbnbs.json';
import Store from './Store/Store.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Store airbnb={airbnbs} />
      </div>
    );
  }
}

export default App;
