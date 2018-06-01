import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VacationRentals from './VacationRentals/VacationRentals';

class App extends Component {
  render() {
    return (
      <div className="App">
      <VacationRentals />  
      </div>
    );
  }
}

export default App;
