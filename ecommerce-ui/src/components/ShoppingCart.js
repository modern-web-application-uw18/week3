import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

// feeds RentalPage

class ShoppingCart extends Component {

  render() {
    return (
        <form>
          <div className="cart-all">
          <h1>Properties Rented:</h1>
           {this.props.selectedRentals.map((airbnb, index) =>
            <ShoppingCartItem
            removeRental={this.props.removeRental(index)}
            key={index}
            title={airbnb.title}
            cost={airbnb.payment.cost} />
          )}
            <div className="cart-total"><h1>{'$'+this.props.getCartTotal()} </h1> <h2> in my cart </h2>
            </div>
        </div>
        </form>
    );
  }
}

ShoppingCart.propTypes = {
  removeRental: PropTypes.func,
  selectedRentals: PropTypes.array,
  getCartTotal: PropTypes.func
};

export default ShoppingCart;
