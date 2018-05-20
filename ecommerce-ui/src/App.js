import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rental from './ecommerce/Rental.js';
import airbnb from './ecommerce/airbnb.json';
// console.log(airbnb);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Week3 Assignment</h1>
        </header>

        {Rental}
        <div className='rental-body'>
          <div  className = 'shopping-cart'>
          <p>Shopping Cart has {0} items</p>
          </div>

          {
            airbnb.map((rental, indx)=> {
              return <Rental key={indx} rental={rental} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;
