import React, { Component } from 'react';

class Cart extends Component { 
    render() {
            return (
            <div className='screen'>
            <div className='cart'>
                <h1>Your Shopping Cart Items:</h1>
                <button className='closeCartButton' onClick={() =>
                    this.props.onCloseCartClick()}>CLOSE CART
                </button>
                <ul>
                    {this.props.rentals.map((item, id) => {
                        return (
                            <div className='cartItem' key={id}>
                                <p key={id}><strong>{id+1}: {item.item}</strong></p>
                                <p>Cost: {item.cost}</p>
                                <button className='removeItemButton' onClick={() => 
                                    this.props.removeRental(item)} key={item}>REMOVE FROM CART
                                </button>
                            </div>
                        )
                    })}
                </ul>
            </div>
            </div>
            )
        }
}
 
export default Cart;
