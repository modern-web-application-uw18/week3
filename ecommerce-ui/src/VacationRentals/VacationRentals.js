import React, { Component } from 'react';

import PropertyCard from './../PropertyCard/PropertyCard';
import AddToCart from './../AddToCart/AddToCart';
import TotalArea from './../TotalArea/TotalArea';
import AirBnBData from './../data/airbnbs.json';
import './VacationRentals.css';

class VacationRentals extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        lineItems: [
            { name: '', cost: 0 }
            ]
        }
    }
    addToCart = (items) => {
        
        this.setState((prevState, props) => {
            console.log('items', items);
            const lineItem = {
                name: items.name,
                cost: items.cost
            };
            const newLineItems = prevState.lineItems;
            newLineItems.push(lineItem);
            return {
                lineItems: newLineItems
            };
        });
    }
    render(){
        console.log('this state:', this.state);
        return(
            <div>
                <section className = "vaFlex-Container"><span><h2>Vacation Rentals</h2></span>
                <div>
                    <PropertyCard dataAirBnB={AirBnBData} onAddToCartClick={this.addToCart}/>
                    
                    <TotalArea items={this.state.lineItems} />
                </div>
                </section>
            </div>
        );
    }
}

export default VacationRentals;