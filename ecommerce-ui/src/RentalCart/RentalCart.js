import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCart.css';
import RentalItem from '../RentalItem/RentalItem';

class RentalCart extends Component {

  render() {    
    return (
      <div id="shoppingCart">
        <form>          
          <h2>RENTALS IN YOUR CART:</h2>
          {this.props.productsInCart.map((product, index) =>
            <RentalItem cancelYourRent={this.props.cancelYourRent(index)} key={index} title={product.title} cost={product.payment.cost} />
          )}
          <div className="shoppingcart-footer">
            <div className="listingscart-subtotal"><p>Your Total Cost:</p> ${this.props.whatRentalTotal()} </div>
          </div>
        </form>
      </div>       
    );
  }
}

RentalCart.propTypes = {
  cancelYourRent: PropTypes.func,
  productsInCart: PropTypes.array,
  whatRentalTotal: PropTypes.func
};

export default RentalCart;
