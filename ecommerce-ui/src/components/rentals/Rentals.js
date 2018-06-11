import React, { Component } from 'react';

class Rentals extends Component {
  render() {

    return (
      <section>
        {this.props.listings.map((listing, index) =>
          <div key={index}>
            <h1>{listing.title}</h1>
            <img src={listing.image} alt="" />
            <p>${listing.payment.cost}</p>
            <button
              value={index}
              onClick={this.props.addRental(index)}>Add to cart</button>
          </div>
        )}
      </section>
    );
  }
}

export default Rentals;
