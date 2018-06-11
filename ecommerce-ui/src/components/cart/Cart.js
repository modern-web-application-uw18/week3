import React, { Component } from 'react';

class Cart extends Component {
  render() {

    const cartTotal = () => {
      let total = 0;
      for (let rental of this.props.inCart) {
        total += rental.payment.cost
      }
      return total;
    }

    return (
      <aside>
        <p>Shopping Cart</p>

        {this.props.inCart.map((rental, index) =>
          <div key={index}>
            <h2>{rental.title}</h2>
            <button onClick={this.props.deleteRental(index)}>×</button>
            <p>${rental.payment.cost}</p>
          </div>
        )}

        <div>${cartTotal()}</div>
      </aside>
    );
  }
}

export default Cart;
