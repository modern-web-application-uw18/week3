import React, { Component } from 'react';
import PropTypes from 'prop-types';
import airbnbs from '../airbnbs.json';
import AirBnbLayout from './AirBnbLayout';

// loops through JSON, maps object
// feeds RentalPage.js

class AirBnbList extends Component {


    render() {
        return (
        <div className="all-rentals">
            {airbnbs.map((airbnb, index) =>
                <AirBnbLayout addRental={this.props.addRental(index)}
                key={index}
                id = {index}
                title = {airbnb.title}
                image = {airbnb.image}
                cost = {airbnb.payment.cost}
                city = {airbnb.location.city}
                country = {airbnb.location.country}
                rating = {airbnb.rating.stars}
                />
                )}
            </div>
        );
    }
}

AirBnbList.propTypes = {
  addRental: PropTypes.func,
  allbnbs: PropTypes.array
};

export default AirBnbList;
