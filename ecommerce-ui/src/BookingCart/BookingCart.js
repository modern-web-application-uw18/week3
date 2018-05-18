import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RentalProperty from './../RentalProperty/RentalProperty';
import './BookingCart.css';


const propTypes = {
  rentalProperties: PropTypes.arrayOf(Object)
}

class BookingCart extends Component {

  constructor(props){
    super(props);
    this.state = {
      total:0
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    return (
      <div>
        <div className="Booking-Cart-container">
          {this.props.rentalProperties.map((rentalProperty, key) => {
            return <RentalProperty key={key} rentalProperty={rentalProperty} handleTotal={this.calculateTotal}/>;
          })}
        </div>
        <h2>Total Cart Summary: {this.state.total}$</h2>
      </div>
    );
  }
}

BookingCart.propTypes = propTypes;

export default BookingCart;
