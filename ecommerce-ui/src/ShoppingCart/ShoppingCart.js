import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

class ShoppingCart extends Component {

  render() {    
//console.log(this.props.productsInCart);
    return (
      <div id="PPMiniCart">
        <form>          
          <h2>Shopping Cart</h2>
          {this.props.productsInCart.map((product, index) =>
            <ShoppingCartItem removeFromCart={this.props.removeFromCart(index)} key={index} title={product.title} cost={product.payment.cost} />
          )}
          <div className="minicart-footer">
            <div className="minicart-subtotal"> ${this.props.getCartTotal()} USD </div>
          </div>
        </form>
      </div>       
    );
  }
}

ShoppingCart.propTypes = {
  removeFromCart: PropTypes.func,
  productsInCart: PropTypes.array,
  getCartTotal: PropTypes.func
};

export default ShoppingCart;