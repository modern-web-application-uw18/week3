import React, { Component } from 'react';
import './App.css';
import rentalProperties from './airbnbs.json';
import BookingCart from './BookingCart/BookingCart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Explore Airbnb</h2>
        <BookingCart rentalProperties={rentalProperties} />
      </div>
    );
  }
}

export default App;
