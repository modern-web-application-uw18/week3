import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import './Description.css';

class Description extends Component {

    render() {

        return (
            <div className="Description">
                <div>{this.props.houseType} &middot; <Location location={this.props.location}/></div>
                <div className="Home-Title">{this.props.title}</div>
            </div>
        );
    }
}

Description.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    location: PropTypes.instanceOf(Object)
};

Description.defaultProps = {
    title: 'No title',
    houseType: 'House'
};

export default Description;