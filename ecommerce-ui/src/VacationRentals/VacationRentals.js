import React, { Component } from 'react';

import PropertyCard from './../PropertyCard/PropertyCard';
import TotalArea from './../TotalArea/TotalArea';
import AirBnBData from './../data/airbnbs.json';
import './VacationRentals.css';

class VacationRentals extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        lineItems: [
            { name: 'test', cost: 10 },
            { name: 'test2', cost: 25 }
            ]
        }
    }
    addToCart = (items) => {
        

        this.setState((prevState, props) => {
            //console.log('items', items);
            //console.log('AirBnBData', AirBnBData);

        

            AirBnBData.map((listing)=> {
                //console.log('listing title', listing.title);
                if (items === listing.title){
                    
                    const lineItem = {
                        name: listing.title,
                        cost: listing.payment.cost
                    }
                    const newLineItems = prevState.lineItems;
                    newLineItems.push(lineItem);
                    
                    return {
                        lineItems: newLineItems
                    };

                }
            })

        });
    }
    render(){
        console.log('this state:', this.state.lineItems);
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