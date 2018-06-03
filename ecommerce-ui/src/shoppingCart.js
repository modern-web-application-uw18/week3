import React, { Component } from 'react';
import RentCard from './rentCard.js';
import PropTypes from 'prop-types';


class ShoppingCart extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
                rentals: [],
                rental: {},
                total: 0
        }
        this.addRental = this.addRental.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    addRental = (itemTitle, itemCost) => { 
        let item_Title = itemTitle;
        let item_Cost = itemCost;
        this.setState({rental:{item: item_Title, cost: item_Cost}});
        setTimeout(() => {
                this.setState((prevState, props) => {
                    const newRentals = prevState.rentals;
                    newRentals.push(this.state.rental);
                    return {
                        rentals: newRentals
                    };
                });
            }, 50);
         setTimeout (() => {
             this.calculateTotal();
         }, 60);
    }

    calculateTotal = () => {
        const rentals = this.state.rentals;
        console.log('rentals as seen from calculateTotal', rentals);
        let total = rentals.reduce((runningTotal, rental) => {
            const cost = parseFloat(rental.cost);
            return runningTotal + cost;
        }, 0);
        console.log('Total is:', total);
        this.setState({total: total});
        return total;
    }
    
    render() {
        const listRentals = this.state.rentals.map((rental) => {
            return (
                {listRentals}
            )
        });
        return (
            <div className='shoppingCart'>
                <div className='header'>
                    <h1>SHOPPING CART Total: ${this.state.total}</h1>
                </div>
                <div>
                    <RentCard data={this.props.data} addRental={this.addRental} />  
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    addRental: PropTypes.func
}

export default ShoppingCart;


// onItemChange = (idx) => {
//     return (attr) => {
//         return (e) => {
//             const newValue = e.target.value;
//             this.setState((prevState, props) => {
//                 const newRentals = prevState.rentals;
//                 newRentals[idx][attr] = newValue;
//                 return {
//                     rentals: newRentals
//                 };
//             });
//         }
//     }
// }

