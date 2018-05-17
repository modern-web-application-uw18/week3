import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem.js';
import CartTotal from '../CartTotal/CartTotal.js';
import PropTypes from 'prop-types';

class Cart extends Component {
    CartContentDisplay = () => {
        const noItemsInCart = (this.props.itemsInCart.length===0);
        const noItemMessage = "Your Cart Is Empty :("
        if (noItemsInCart) {
            return noItemMessage;
        }
        const itemsInCart = this.props.itemsInCart.map((item, idx) => {
            return (
                <div key={idx}>
                    <CartItem 
                        item={item}
                        onRemoveFromCart={this.props.onRemoveFromCart(idx)}
                    />
                </div>
            );
        });
        return itemsInCart;
    }

    render() {
        return (
            <div className="Cart">
                <this.CartContentDisplay/>
                <p></p>
                <CartTotal itemsInCart={this.props.itemsInCart}/>
            </div>
        )
    }
}

Cart.propTypes = {
    itemsInCart: PropTypes.array,
    onRemoveFromCart: PropTypes.func
}

Cart.defaultProps = {
    itemsInCart : []
}
export default Cart;