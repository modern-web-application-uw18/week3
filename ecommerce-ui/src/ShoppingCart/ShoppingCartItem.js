import React, { Component } from 'react';
import '../ShoppingCart/ShoppingCart.css';

class ShoppingCartItem extends Component {
  
  render() {
    return (
      <ul>
        <li className="minicart-item">
            <div className="minicart-details-name">Item
            </div>
            <div className="minicart-details-remove">
                <button className="minicart-remove">×</button>
            </div>
            <div className="minicart-details-price"> <span className="minicart-price">$0.02</span> </div>
        </li>
      </ul>
    );
  }
}

export default ShoppingCartItem;