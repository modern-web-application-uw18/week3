import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
    calcTotal = () => {
        const cartItems = this.props.cartItems;
        const sumOfRentals = cartItems.reduce((theSum, item) =>{
            const cost = parseFloat(item.payment.cost);
            return theSum + cost;
        }, 0);
        return sumOfRentals;
    }
    render() {
        return (
            <strong><p className="totalSum">Total: ${this.calcTotal()}</p></strong>
        )
    }
    
}
Total.propTypes = {
    cartItems: PropTypes.array
}
Total.defaultProps = {
    cartItems: []
}
export default Total;