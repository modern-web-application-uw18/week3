import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './Host.css';

class Host extends Component {

    render() {
        
        const isSuper = () => {
            if (this.props.host.isSuperhost) {
                return (
                    <span> &middot; Superhost </span>
                )
            } else {
                return null;
            }
        }

        return (
            <div className="Host">{this.props.host.name} {isSuper()} &middot; <Rating rating={this.props.rating}/></div>
        );
    }
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool,
    rating: PropTypes.instanceOf(Object)
};

Host.defaultProps = {
    name: 'Anonymous',
    isSuperhost: false
};

export default Host;