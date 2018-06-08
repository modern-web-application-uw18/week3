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
    this.state = { items: [] };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  addToCart = (item) => {
    this.setState((prevState, props) => {
      console.log('prevState', prevState);
      console.log('props', props);

      const items = prevState.items;
      items.push(item);

      return {
        items: items
      };
    });
  }

  removeFromCart = (item) => {
      this.setState((prevState, props) => {
      console.log('prevState', prevState);
      console.log('props', props);

      const items = prevState.items;
      items.remove(item);

      return {
        items: items
      };
    });
  }

  isInCart = (item,e) => {
    this.state.items.forEach(itm => {
      if (itm === item) {
        return true;
      }
    });
    return false;
  }

  total = () => {
    let totalCost = 0;
    this.state.items.forEach(item => {
      totalCost += item.cost;
    });
    return totalCost;
  }

  render() {
    return (
      <div className="App" text-align="center">
        <div className="App-header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Homes Away From Home</h1>
        </div>
        <header className="App-header">
        </header>
        <div className="ShoppingCart">
          <h3>Shopping Cart</h3>
          <div className="item-list">
            {this.state.items.map((home, index) => {
              return <Item key={index} item={home} />
            })};
          </div>
          <div>{this.total()}</div>
          <img src={cart} alt="" />
        </div>
        {/* <ShoppingCart removeFromCart={this.removeFromCart} /> */}
        <header className="App-header">
        </header>
        <p className="App-intro">
          Browse our accommodations
        </p>
        <div className="App-homes-list" >
          {airbnbs.map((home, index) => {
            return <Home key={index} home={home}
              addToCart={this.addToCart}
              isInCart={this.isInCart} />;
          })}
        </div >
      </div>
    );
  }
}

export default App;
