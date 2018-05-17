import React, { Component } from 'react';

class CheckoutTotal extends Component {
  // calculateTotal function from class demo:
  calculateTotal = () => {
    const { items } = this.props;
    const total = items.reduce((runningTotal, item) => {
        const cost = parseFloat(item.paymentCost);
        if (Number.isNaN(cost)) {
            return runningTotal;
        }
        return runningTotal + cost;
    }, 0);
    return total;
  }

  render() {
    return (
      <div className="checkout-total">
        <p>Total: <span>${this.calculateTotal()}</span></p>
      </div>
    );
  }
}

export default CheckoutTotal;
