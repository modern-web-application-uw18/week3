import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './air-bnb/Home';
import Item from './air-bnb/Item';
import airbnbs from './json/airbnbs.json';
import cart from './img/ShoppingCart.png';

export class App extends Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = { items: [] };
  }

  addToCart = (home, e) => {
    this.setState((prevState, props) => {
      const items = prevState.items;
      items.push(home);

      return {
        items: items
      };
    });
  }

  removeFromCart = (item, e) => {
    this.setState((prevState, props) => {
      const items = prevState.items;
      for (let index = 0; index < items.length; index++) {
        if (items[index] === item) {
          items.splice(index, 1);
        }
      }
      return {
        items: items
      };
    });
  }

  isInCart = (item, e) => {
    const items = this.state.items;
    for (let index = 0; index < items.length; index++) {
      if (items[index] === item) {
        return true;
      }
    }
    return false;
  }

  total = () => {
    let totalCost = 0;
    this.state.items.forEach(item => {
      totalCost += item.payment.cost;
    });
    return totalCost;
  }

  emptyCart = () => {
    return this.state.items.length === 0;
  }

  render() {
    return (
      <div className="App" text-align="center">
        <div className="App-header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Homes Away From Home</h1>
          {this.emptyCart() ? null : <div className="App-total">Total: ${this.total()}</div>}
          <div className="App-cart-container">
            <div>{this.state.items.length}</div>
            <img src={cart} alt="" />
          </div>
        </div>
        <header className="App-header-line"></header>
        {this.emptyCart() ? null : (
          <div className="App-ShoppingCart">
            <div className="App-cart-title">Shopping Cart</div>
            <div className="item-list">
              {this.state.items.map((home, index) => {
                return <Item key={index} item={home}
                  removeFromCart={e => this.removeFromCart(home, e)} />;
              })}
            </div>
          </div>
        )}
        <p className="App-intro">
          Browse our accommodations
        </p>
        <div className="App-homes-list" >
          {airbnbs.map((home, index) => {
            return <Home key={index} home={home}
              addToCart={e => this.addToCart(home, e)}
              isInCart={e => this.isInCart(home, e)} />;
          })}
        </div >
      </div>
    );
  }
}

export default App;
