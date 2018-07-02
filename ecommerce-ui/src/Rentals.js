import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rentals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      cartCount: 1
    };
  }
// how to make it so each button adds to one cart instead of unique carts
// initial click still returns 0
  addToCart = () => {
    this.setState((prevState, props) => {
      const totalCost = prevState.cost;
      this.state.cost = totalCost + this.props.unit.payment.cost;
      this.state.cartCount = this.state.cartCount + 1;
    });
    console.log("cart:" + this.state.cost);
  }

  render() {

    const unit = this.props.unit;
    const cost = unit.payment.cost;
    return (
      <div className='rentalProperty'>
        <img src={unit.image} alt={unit.location.city} />
        <div className='rentalPropertyText'>
          <h4>{unit.title}</h4>
          <h4>Daily Rate: ${unit.payment.cost}</h4>
          <h6>{unit.payment.description}</h6>
          <button onClick={() => this.addToCart()}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

Rentals.propTypes = {
  unit: PropTypes.object.isRequired
}

export default Rentals;
