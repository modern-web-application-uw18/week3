import React, { Component } from 'react';
import Rental from '../Rental/Rental.js';
import PropTypes from 'prop-types';

class RentalsBox extends Component{
    render(){ 
        const rentals = this.props.airbnb.map((rental,idx)=> {
            return (
                <div className="Rental" key={idx}>
                <Rental rental = {rental} addToCart={this.props.addToCart} />
                </div>
            );

        });
        return (
            <div className="RentalsBox"> {rentals} </div>
        );
    }
}
RentalsBox.propTypes = {
    airbnb: PropTypes.array,
    addToCart: PropTypes.func
}

export default RentalsBox;