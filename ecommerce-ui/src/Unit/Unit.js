import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Unit extends Component {
    render() {
        const { title, image, payment, location } = this.props.unit;
        return(
            <div>
                <p>{title}</p>
                <img src={image} alt="a house you can rent"/>
                <p>Location: {location.city}, {location.country}</p>
                <div className="PurchaseSection">
                    <p>Cost: ${payment.cost}</p>
                    <button onClick={this.props.onAddToCart(this.props.unit)}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

Unit.propTypes = {
    unit: PropTypes.object,
    onAddToCart: PropTypes.func
}

export default Unit;