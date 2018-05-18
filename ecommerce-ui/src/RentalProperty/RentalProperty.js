import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalProperty.css';

const propTypes = {
    rental: PropTypes.object
}

class RentalProperty extends Component {
    constructor(props){
        super(props);
        this.state = {
            added: false,
            removed: true
        }
    }

    addToCart = () => {
        this.setState({
            added: true,
            removed:false
        });
        this.props.handleTotal(this.props.rentalProperty.payment.cost);
    }

    removeFromCart = () => {
        this.setState({
            added: false,
            removed: true
        });
        this.props.handleTotal(-this.props.rentalProperty.payment.cost);
    }

    renderRental() {
        return (
            <div className="Rental">
                <div>
                    <button style={this.state.removed ? {className:"Rental-button"} : {display: 'none'}}  onClick={this.addToCart}>Add to Cart</button>
                    <button style={this.state.added ? {className:"Rental-button"} : {display: 'none'}} onClick={this.removeFromCart}>Remove from Cart</button>
                </div>
                <img className="Rental-image" src={this.props.rentalProperty.image} alt={this.props.rentalProperty.title} />
                <div className="Rental-title">{this.props.rentalProperty.title}</div>
                <div>{this.props.rentalProperty.payment.cost}$ per night - {this.props.rentalProperty.payment.description}</div>
            </div>
        )
    }

    render() {
        return this.renderRental();
    }
}

RentalProperty.propTypes = propTypes;

export default RentalProperty;