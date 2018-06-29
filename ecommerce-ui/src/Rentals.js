import React, { Component } from 'react';

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
  addToCart = (cost) => {
    console.log(cost);
    console.log(this.state.cost);
    console.log(this.state.cartCount);
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
          <button onClick={() => this.addToCart({cost})}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default Rentals;
