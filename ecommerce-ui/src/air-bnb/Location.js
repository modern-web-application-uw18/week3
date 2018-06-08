import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Location extends Component {

    render() {

        const {
            city,
            country
        } = this.props.location;

        return (
            <span>{city}, {country}</span>
        );
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};

Location.defaultProps = {
    city: 'Unknown',
    country: 'Unknown'
};

export default Location;
