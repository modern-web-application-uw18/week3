import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rental extends Component {
    render() {
        const { title, houseType, image, location, payment, host, rating } = this.props.rental;
        return (
            <div className="rentalBox">
                <h2>{title}</h2><br />
                <div className="rentalBoxImg"><img src={image} alt={title} /></div>
                <div className="rentalText">
                <p>{houseType}</p>
                <p> Location: {location.city}, {location.country}</p>
                <p> Owner: {host.name} </p>
                <p> {rating.stars} stars out of {rating.reviews} reviews</p><br />
                    <div className="costDiv">
                        <b><p>${payment.cost}</p></b>
                        <button onClick={this.props.addToCart(this.props.rental)}> RENT </button>
                    </div>
                </div>
            </div>
        );
    }
}
Rental.propTypes = {
    rental: propTypes.object,
    addToCart: propTypes.func
}
export default Rental;