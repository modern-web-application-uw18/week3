import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout/Checkout';
import BnbDetails from './BnbDetails/BnbDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
      totalItemsInCart: 0
    };
  }

  addItemToCart = (purchaseItem) => {
    this.setState((prevState, props) => {
      const updatedItemsInCart = prevState.itemsInCart;
      updatedItemsInCart.push(purchaseItem);
      const numberOfItemsInCart = updatedItemsInCart.length;
      return {
        itemsInCart: updatedItemsInCart,
        totalItemsInCart: numberOfItemsInCart
      };
    });
  };

  removeItemFromCart = (item, idListItem) => {
    this.setState((prevState, props) => {
      const updatedToRemoveItemsInCart = prevState.itemsInCart;
      updatedToRemoveItemsInCart.splice(item, 1);
      const numberOfItemsInCart = updatedToRemoveItemsInCart.length;
      return {
        itemsInCart: updatedToRemoveItemsInCart,
        totalItemsInCart: numberOfItemsInCart
      };
    });
  }

  BnbDetailsPage = (props) => {
    return (
      <BnbDetails
        addItemToCart={this.addItemToCart.bind(this)}
        {...props} />
    );
  }

  CheckoutPage = (props) => {
    return (
      <Checkout
        addItemToCart={this.addItemToCart.bind(this)}
        removeItemFromCart={this.removeItemFromCart}
        itemsInCart={this.state.itemsInCart}
        {...props} />
    );
  }

  getItemsInCartCounter(count) {
    return (
      <div className="items-in-cart">
        <span>{count}</span>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="header-container">
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <h1 className="logo">cloud<span>bnb</span></h1>
              </NavLink>
              <NavLink to="/checkout" style={{ textDecoration: 'none' }}>
                <div className="cart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(130, 110, 85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1">
                    </circle>
                    <circle cx="20" cy="21" r="1">
                    </circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                    </path>
                  </svg>
                  {this.state.totalItemsInCart ? this.getItemsInCartCounter(this.state.totalItemsInCart) : null}
                </div>
              </NavLink>
            </div>
          </header>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/checkout" render={this.CheckoutPage}/>
            <Route path="/id/:id" render={this.BnbDetailsPage} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
