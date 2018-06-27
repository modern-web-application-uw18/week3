import React, { Component } from 'react';
import './App.css';
import Properties from './airbnbs.json';
import Rentals from './Rentals.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find your getaway</h1>
        </header>
        <div className = 'property'>
          {Properties.map((unit, idx) => {
            console.log(unit);
            return <Rentals key={idx} unit = {unit} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
