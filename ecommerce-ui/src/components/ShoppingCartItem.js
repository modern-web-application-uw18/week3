import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

// feeds Shopping Cart

class ShoppingCartItem extends Component {


  render() {
    return (
      <ul>
        <li className="added-rentals">
            {this.props.title}{' ($' + this.props.cost + ') '}
            <button onClick={this.props.removeRental} className="remove-btn">Remove</button>
        </li>
      </ul>
    );
  }
}

ShoppingCartItem.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  removeRental: PropTypes.func
}

export default ShoppingCartItem;
