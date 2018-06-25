import React, { Component } from 'react';
import './ShoppingCart.css';
import Card from './Card';

class ShoppingCart extends Component {
	render() {		
		return (
			<div className="shopping-cart">
				<p>CART</p>
				
				<p>Total:</p>
			</div>
		);	
	}
}

export default ShoppingCart;
