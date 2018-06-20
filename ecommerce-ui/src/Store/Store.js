import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Store.css';
import Cart from '../Cart/Cart.js';
import RentalsBox from '../RentalsBox/RentalsBox.js';

class Store extends Component {
    constructor(props){
        super(props);
        this.state = {buyRentals: props.initialValue};
    }
    addToCart = (rental) => {
        return() => {
            this.setState((prevState) => {
                const buyRental = rental;
                const newBuyRentals = prevState.buyRentals;
                newBuyRentals.push(buyRental);
                return {
                    buyRentals: newBuyRentals
                };
            });
        }
    }

    deleteRental = (idx) => {
        return () => {
            this.setState((prevState) => {
                const newBuyRentals = prevState.buyRentals;
                newBuyRentals.splice(idx, 1)
                return {
                    buyRentals: newBuyRentals
                }
            });

        }
    }
     render() {
         return(
             <div className="Store">
                <div className= "storeCartDiv">
                <h3>Cart</h3>
                <Cart cartItems={this.state.buyRentals} deleteRental = {this.deleteRental} />
                </div>
                <div className="storeRB">
                <RentalsBox airbnb = {this.props.airbnb} addToCart={this.addToCart} />
                </div>
             </div>//end store div
         );

    }


}
Store.propTypes = {
    initialValue: PropTypes.array,
    airbnb: PropTypes.array
}
Store.defaultProps ={
    initialValue:[]
}

export default Store;