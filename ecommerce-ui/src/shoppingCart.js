import React, { Component } from 'react';
import RentCard from './rentCard.js';
import Cart from './cart.js';
import PropTypes from 'prop-types';


class ShoppingCart extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
                rentals: [],
                rental: {},
                total: 0,
                showCart: false
        }
        this.addRental = this.addRental.bind(this);
        this.removeRental = this.removeRental.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.onCartClick = this.onCartClick.bind(this);
        this.onCloseCartClick = this.onCloseCartClick.bind(this);
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

    removeRental = (item) => { 
        this.setState({ 
            rentals: this.state.rentals.filter(el => el !== item)
        });
        setTimeout(() => {
            this.calculateTotal(); 
        }, 60);
    }    

    calculateTotal = () => {
        const rentals = this.state.rentals;
        let total = rentals.reduce((runningTotal, rental) => {
            const cost = parseFloat(rental.cost);
            return runningTotal + cost;
        }, 0);
        this.setState({total: total});
        return total;
    }

    onCartClick() {
        this.setState ({
            showCart: true
        });
    }

    onCloseCartClick() {
        this.setState ({
            showCart: false
        })
    }

    render() {
        const {listRentals} = this.state.rentals.map(() => {
            return (
                {listRentals}
            )
        });

        return (
            <div className='shoppingCart'>
                <div className='header'>
                    <h1>SHOPPING CART Total: ${this.state.total}</h1>
                    <button className='showCartButton' 
                        onClick={this.onCartClick}>SHOW CART
                    </button>
                        {this.state.showCart ? 
                            <Cart 
                                total={this.state.total} 
                                rentals={this.state.rentals}
                                removeRental={this.removeRental}
                                onCloseCartClick={this.onCloseCartClick}
                            /> : null
                        }
                </div>
                <div>
                    <RentCard 
                        data={this.props.data} 
                        addRental={this.addRental} 
                    />  
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    addRental: PropTypes.func,
    removeRental: PropTypes.func
}

export default ShoppingCart;
