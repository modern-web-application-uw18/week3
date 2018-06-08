import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import Payment from './Payment';
import Host from './Host';
import Rating from './Rating';
import './Item.css';
import './Home.css';

class Item extends Component {

    render() {

        const {
            title,
            houseType,
            image,
            location,
            payment,
            host,
            rating
        } = this.props.item;

        return (
            <div className="Item">
                <div className="Item-image-container" >
                    <img src={image} alt="" />
                </div>
                <div className="Item-title-container">
                    <div className="House-Title">{title}</div>
                    <Location location={location}/>
                </div>
                <Payment payment={payment} />
                <button onClick={this.props.removeFromCart}
                    className="Green-button">Remove</button>
            </div>
        );
    }
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.instanceOf(Location),
    payment: PropTypes.instanceOf(Payment),
    host: PropTypes.instanceOf(Host),
    rating: PropTypes.instanceOf(Rating),
};

Item.defaultProps = {
    title: 'No title :(',
    houseType: 'No house type :(',
};

export default Item;