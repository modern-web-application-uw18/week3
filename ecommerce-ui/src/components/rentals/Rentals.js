import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './rentals.css';

class Rentals extends Component {

  render() {
    return (
      <section className="rental-listings">
        {this.props.listings.map((listing, index) =>
          <div key={index} className="rental-listing">
            <img src={listing.image} alt="" />
            <h2 className="rental-listing__title">{listing.title}</h2>
            <p>
              Your host: {listing.host.name}
              {listing.host.isSuperhost ? 'is a Superhost!' : ''}
            </p>
            <p>
              {listing.rating.stars} stars | {listing.rating.reviews} reviews
            </p>
            <p>{listing.location.city}, {listing.location.country}</p>
            <p>
              ${listing.payment.cost} per night {listing.payment.description ? '|' : ''} {listing.payment.description}
            </p>
            <button
              className="btn"
              value={index}
              onClick={this.props.addRental(index)}>Request to book</button>
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
