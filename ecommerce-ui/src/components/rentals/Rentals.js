import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Rentals.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    payment: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isSuperhost: PropTypes.bool.isRequired,
    }),
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
    })
  })).isRequired,

  addRental: PropTypes.func.isRequired
}

export default Rentals;
