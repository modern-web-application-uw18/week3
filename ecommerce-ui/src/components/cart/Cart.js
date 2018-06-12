import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cart.css';

class Cart extends Component {
  render() {

    const { length } = this.props.inCart;

    const cartTotal = () => {
      let total = 0;
      for (let rental of this.props.inCart) {
        total += rental.payment.cost
      }

      return total;
    }

    return (
      <aside className="cart-container"  id="cart-title">
        <h2 className="cart-container__title">Requested Rentals</h2>

        {length === 0 &&
          <div className="cart-item__total">You have no selections</div>
        }

        <div className="cart-item__container">
          {this.props.inCart.map((rental, index) =>
            <div key={index} className="cart-item">
              <h3 className="cart-item__title">{rental.title}</h3>
              <p className="cart-item__cost">${rental.payment.cost}</p>
              <button className="btn cart-item__btn" onClick={this.props.deleteRental(index)}>Remove</button>
            </div>
          )}

          {length !== 0 &&
            <div>
              <h2 className="cart-container__title">Request Total</h2>
              <div className="cart-item__total">
                {length} rental{length === 1 ? '' : 's'} requested | <strong>Total ${cartTotal()}</strong>
              </div>
            </div>
          }

        </div>
      </aside>
    );
  }
}

Cart.propTypes = {
  deleteRental: PropTypes.func.isRequired
}

export default Cart;
