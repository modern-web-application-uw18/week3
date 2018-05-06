import React, { Component } from 'react';
import './ShoppingCart.css';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products: []
    };
}

addProduct = (event) => {
  const productKey = event.target.value;
  this.setState((prevState, props) => {
      const products = prevState.products;
          products.push(productKey);
      return {
          products: products
      };
  });
}

  render() {
    return (
      <div id="PPMiniCart">
        <form>          
          <h2>Shopping Cart</h2>
          <ShoppingCartItem />
          <div className="minicart-footer">
            <div className="minicart-subtotal"> $0.02 USD </div>
          </div>
        </form>
      </div>       
    );
  }
}

export default ShoppingCart;