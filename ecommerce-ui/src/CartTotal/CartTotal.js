import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartTotal extends Component {
    calculateTotal = () => {
        const itemsInCart = this.props.itemsInCart;
        const total = itemsInCart.reduce((runningTotal, item) => {
            const cost = parseFloat(item.payment.cost);
            if (Number.isNaN(cost)) {
                return runningTotal;
            }
            return runningTotal + cost;
        }, 0);
        return total;
    }

    render() {
        return (
            <strong>Total: ${this.calculateTotal()}</strong>
        )
    }
}

CartTotal.propTypes = {
    itemsInCart: PropTypes.array
}

CartTotal.defaultProps = {
    itemsInCart : []
}

export default CartTotal;