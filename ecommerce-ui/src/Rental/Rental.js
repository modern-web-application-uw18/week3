import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';
import Payment from '../Payment/Payment';

class Rental extends Component {
    render() {
        const {
            title,
            image,
            location,
            payment
        } = this.props.rental;

        return (
            <div className="Rental">
                <div className="Rental-image-container">
                    <img src={image} alt=""/>
                </div>
                <div className="Rental-title-container">
                    <div> {title} </div>
                    <Location location={location} />
                </div>
                <div className="Price"> ${payment.cost} per night </div>
                    <div className="Rental-button-container">
                        <button onClick={this.props.removeFromCart}
                            className="Rental-green-button">Remove</button>
                    </div>
            </div>

        );
    }
}

Rental.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.instanceOf(Location),
    payment: PropTypes.instanceOf(Payment)
};

Rental.defaultProps = {
    title: 'No title'
}

export default Rental;