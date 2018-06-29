import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
    render() {
        if ( this.props.payment.description === "" ) {
            return(
                <div> ${this.props.payment.cost} per night </div>
            )
        }
        else {
            return (
                <div> ${this.props.payment.cost} per night &middot; {this.props.payment.description} </div>
            )};
        }
}

Payment.propTypes = {
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

Payment.defaultProps = {
    cost: 150,
    description: "None"
}

export default Payment;