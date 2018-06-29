import React, { Component } from 'react';
import './App.css';
import homes from './airbnbs.json';
import Home from './Home/Home.js';
import Rental from './Rental/Rental.js';
import ShoppingCart from './img/ShoppingCart.png'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = { rentals: [] };
  }

  addToCart = (home, e) => {
    return null;
  }

  isInCart = (rental, e) => {
    return false;
  }

  removeFromCart = (rental, e) => {
    return null;
  }

  emptyCart = (rental, e) => {
    return null;
  }


  render() {
    return (
      <div className="App" text-align="center">
        <header className="App-header">
          <h1 className="App-title">Airbnb Homes for Rent</h1>
          <div className="App-shopping-cart-container">
            <span>Rentals: {this.state.rentals.length}</span>
            <img src={ShoppingCart}/>
          </div>
        </header>

        {this.emptyCart() ? null : (
          <div className="App-ShoppingCart">
            <div className="App-ShoppingCart-title">Shopping Cart</div>
            {this.state.rentals.map((home, index) => {
              return (<Rental key={index} rental={home}
                removeFromCart={this.removeFromCart} isInCart={this.isInCart} />
              )
            })}
          </div>
        )}
        <div className="App-home-container">
          {homes.map((home, idx) => {
            return ( <Home idx={idx} home={home} /> );
          })}
          {homes.map((home, index) => {
          return (
            <Home key={index} home={home} addToCart={e => this.addToCart(home, e)} isInCart={e => this.isInCart(home,e)} />);
          })}
        </div>
      </div>
    )
  }
}

export default App;
