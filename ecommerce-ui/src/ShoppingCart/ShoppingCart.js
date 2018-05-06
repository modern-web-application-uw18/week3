import React, { Component } from 'react';
import './ShoppingCart.css';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: []
    };
}

  addProduct = (product) => {
    this.setState((prevState, props) => {
        const products = prevState.products;
            products.push(product);
        return {
            products: products
        };
    });
  }





  render() {

    var sum = 0;
    for (var i = 0; i < this.state.products.length; i++) {
         sum = sum + this.state.products[i].payment.cost;   
    }
    

    return (
      <div id="PPMiniCart">
        <form>          
          <h2>Shopping Cart</h2>
          {this.state.products.map((product, index) =>
            <ShoppingCartItem key={index} title={product.title} cost={product.payment.cost} />
          )}
          <div className="minicart-footer">
            <div className="minicart-subtotal"> ${sum} USD </div>
          </div>
        </form>
      </div>       
    );
  }
}

export default ShoppingCart;