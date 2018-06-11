import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import Payment from './Payment';
import './Item.css';
import './Home.css';

class Item extends Component {

    render() {

        const {
            title,
            image,
            location,
            payment
        } = this.props.item;

        return (
            <div className="Item">
                <div className="Item-image-container" >
                    <img src={image} alt="" />
                </div>
                <div className="Item-title-container">
                    <div className="Home-Title">{title}</div>
                    <Location location={location} />
                </div>
                <div className="Item-cost">${payment.cost} per night</div>
                <div className="Item-button-container">
                    <button onClick={this.props.removeFromCart}
                        className="Item-green-button">Remove</button>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.instanceOf(Location),
    payment: PropTypes.instanceOf(Payment)
};

Item.defaultProps = {
    title: 'No title :('
};

export default Item;