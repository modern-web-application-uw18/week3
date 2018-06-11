import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {

    render() {

        const {
            cost,
            description
        } = this.props.payment;

        const hasDescription = () => {
            if (description) {
                return (
                    <span> &middot; {description}</span>
                )
            } else {
                return null;
            }
        }

        return (
            <div>${cost} per night {hasDescription()}</div>
        );
    }
}

Payment.propTypes = {
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

Payment.defaultProps = {
    cost: 0,
    description: 'None provided'
};

export default Payment;
