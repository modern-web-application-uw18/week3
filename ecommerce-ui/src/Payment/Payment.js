import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
    render() {
        return (
            <div> ${this.props.payment.cost} per night {this.props.payment.description} </div>
        )};
}

Payment.PropTypes = {
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

Payment.defaultProps = {
    cost: "150",
    description: "None"
}

export default Payment;