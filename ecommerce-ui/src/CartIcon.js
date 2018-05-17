import React, { Component } from 'react';
import './CartIcon.css';

class CartIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalItemsInCart: this.props.totalItemsInCart
    };

    this.updateCartState = this.props.updateCartState.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div className="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(130, 110, 85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1">
          </circle>
          <circle cx="20" cy="21" r="1">
          </circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
          </path>
        </svg>
        <div className="items-in-cart">
          <span>{this.state.totalItemsInCart()}</span>
        </div>
      </div>
    );
  }
}

export default CartIcon;
