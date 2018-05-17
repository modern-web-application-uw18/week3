import React, { Component } from 'react';
import RentCard from './rentCard.js';
import PropTypes from 'prop-types';


class ShoppingCart extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
                rentals: [
                    { items: '', total: 0 }
            ]
        }
    }

    onItemChange = (idx) => { //what is this doing?
        return (attr) => {
            return (e) => {
                const newValue = e.target.value;
                this.setState((prevState, props) => {
                    const newRentals = prevState.rentals;
                    newRentals[idx][attr] = newValue;
                    return {
                        rentals: newRentals
                    };
                });
            }
        }
    }

    addRental = (idx) => {  // what is this doing?
        alert('button clicked');
        // this.setState((prevState, props) => {
        //     const rental = {
        //         item: this.item,
        //         cost: this.item.cost
        //     };
        //     const newRentals = prevState.rentals
        //     newRentals.push(rental);
        //     return {
        //         rentals: newRentals
        //     };
        // });
        console.log(this.state.rentals);
    }

    calculateTotal = () => {
        const { rentals } = this.props;
        const total = rentals.reduce((runningTotal, rental) => {
            const cost = parseFloat(rental.cost);
            return runningTotal + cost;
        }, 0);
        return total;
    }

    render() {
        const listRentals = this.state.rentals.map((rental) => {
            return (
                {listRentals}
            )
        });
        //console.log(this.state); // works
        return (
            <div className='shoppingCart'>
                <h1>SHOPPING CART: {this.state.total}</h1>
                <div>
                    <RentCard data={this.props.data} addRental={this.props.addRental} />  
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    addRental: PropTypes.func
}

export default ShoppingCart;