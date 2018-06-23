import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
     return (
       <ul>
         <li>
             {this.props.title}{' ($' + this.props.cost + ') '}
             <button onClick={this.props.removeFromCart}
              className="cartBtn-r">Remove from cart</button>
         </li>
       </ul>
     );
   }
 }

CartItem.propTypes = {
    title: PropTypes.string,
    cost: PropTypes.number,
    removeFromCart: PropTypes.func
}

export default CartItem;
