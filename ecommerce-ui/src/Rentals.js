import React, { Component } from 'react';
import Property from './Property.js';

class Rentals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0
    };
  }

  addToCart = (unit) => {
    console.log("hi");
    console.log(unit);
  }

  render() {
    const unit = this.props.unit;
    return (
      <div className='property'>
      <div className='rentalProperty'>
        <img src={this.props.unit.image} alt={this.props.unit.location.city} />
        <div>
          <h4>{this.props.unit.title}</h4>
          <h4>Daily Rate: ${this.props.unit.payment.cost}</h4>
          <h6>{this.props.unit.payment.description}</h6>
          <button onClick={() => this.addToCart({unit})}>Add to Cart</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Rentals;
