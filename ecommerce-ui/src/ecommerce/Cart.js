import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class Cart extends Component {

 render() {
   return (
       <form>
         <div>
           <h2>Properties in your cart:</h2>
            {this.props.itemsInCart.map((airbnb, idx) =>
             <CartItem
             removeFromCart={this.props.removeFromCart(idx)}
             key={idx}
             title={airbnb.title}
             cost={airbnb.payment.cost} />
            )}
           <div>
             <h1>Cart total: {'$' + this.props.getCartTotal()}</h1>
           </div>
        </div>
      </form>
   );
 }
}

Cart.propTypes = {
 removeFromCart: PropTypes.func,
 itemsInCart: PropTypes.array,
 getCartTotal: PropTypes.func
};

export default Cart;
