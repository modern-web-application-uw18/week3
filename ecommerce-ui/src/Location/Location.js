import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
    render() {
        return ( <span className="Bolded"> {this.props.location.city}, {this.props.location.country} </span>
        )};
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

Location.defaultProps = {
    city: 'Unknown',
    country: 'Unknown'
}

export default Location;