import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
    render() {
        return(
            <div className="CartItem">
                <img 
                    src={this.props.item.image}
                    alt="house to rent"
                    className="CartItemImage"
                />
                <p className="FlexGrow1"></p>
                <p className="FlexGrow2">{this.props.item.title}</p>
                <p className="FlexGrow1"></p>
                <p className="FlexGrow1">Cost: ${this.props.item.payment.cost}</p>
                <button 
                    className="PurchaseButton" 
                    onClick={
                        this.props.onRemoveFromCart
                    }>
                    Remove from Cart
                </button>
            </div>
        );
    }
}

CartItem.propTypes = {
    item: PropTypes.object,
    onRemoveFromCart: PropTypes.func
}

export default CartItem;