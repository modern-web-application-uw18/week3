import React, { Component } from 'react';
import './App.css';
import Properties from './airbnbs.json';
import Rentals from './Rentals.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      cartCount: 1
    };
  }


  render() {

    const rentals = Properties.map((unit,idx) => {
      return <Rentals key={idx} unit={unit} />
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find your getaway</h1>
        </header>

        <div className = 'property'>
          {rentals}
        </div>
      </div>
    );
  }
}

export default App;
