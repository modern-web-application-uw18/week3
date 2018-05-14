import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../ShoppingCart/ShoppingCart.css';

class ShoppingCartItem extends Component {
  
  
  render() {
    return (
      <ul>
        <li className="minicart-item">
            <div className="minicart-details-name">{this.props.title}
            </div>
            <div className="minicart-details-remove">
                <button onClick={this.props.removeFromCart} className="minicart-remove">×</button>
            </div>
            <div className="minicart-details-price"> <span className="minicart-price">${this.props.cost}</span> </div>
        </li>
      </ul>
    );
  }
}

ShoppingCartItem.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  removeFromCart: PropTypes.func
}

export default ShoppingCartItem;