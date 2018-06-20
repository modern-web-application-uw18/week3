import React, { Component } from 'react';
import PropTypes from "prop-types";
import Total from '../Total/Total.js';
import ItemCart from '../ItemCart/ItemCart.js';

class Cart extends Component {
    displayCart = () => {
        const cartItems = this.props.cartItems.map((item, idx) => {
            return (
                <div className="itemsInCart" key={idx}>
                <ItemCart item={item} deleteRental={this.props.deleteRental(idx)} />
                </div>
            );
        });
        return cartItems;
    }

    render() {
        return (
            <div className="cart">
            <this.displayCart />
            <br />
            <Total cartItems={this.props.cartItems}/>
            </div>
        )
    }
}
Cart.propTypes ={
    cartItems: propTypes.array,
    deleteRental: propTypes.func
}
Cart.defaultProps = {
    cartItems:[]
}
export default Cart;