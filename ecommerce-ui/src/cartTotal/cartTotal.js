import React, { Component } from 'react';

class CartTotal extends Component {
     calculateTotal = () => {
        let sum = this.props.cost.reduce((accum, obj) => accum + obj.cost, 0);
    console.log(sum);
    return(
        sum
    )
    }

    render() {
        return (
            <div><strong>Total: ${this.calculateTotal()}</strong></div>
        )
    }
}

export default CartTotal;
