import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
    render() {
        return ( <div> {this.props.location.city}, {this.props.location.country} </div>
        )};
}

Location.PropTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

Location.defaultProps = {
    city: 'Unknown',
    country: 'Unknown'
}

export default Location;