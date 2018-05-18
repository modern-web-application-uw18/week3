import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  BrowserRouter
} from "react-router-dom";
import './BnbListings.css';
import SuperHostIcon from '../HostIcon/SuperHostIcon';
import HostIcon from '../HostIcon/HostIcon';

class BnbListings extends Component {

  getHostIcon() {
    return (
      <div className="host-icon">
        <HostIcon />
      </div>
    );
  };

  getSuperHostIcon() {
    return (
      <div className="host-icon">
        <SuperHostIcon />
      </div>
    );
  };

  getPaymentDescription(descript) {
    return (
      <span>
        · {descript}
      </span>
    );
  };

  render() {
    const isSuperHost = this.props.bnb.host.isSuperhost;
    const image = this.props.bnb.image;
    const backgroundMediaStyles = {
        backgroundImage: 'url(' + image + ')',
    };
    const starNumber = this.props.bnb.rating.stars;
    const paymentDescription = this.props.bnb.payment.description;
    return (
      <BrowserRouter>
      <section className="bnb-listing">
        <Link to={`/id/${this.props.bnb.id}`} style={{ textDecoration: 'none' }}>
          <div className="media" style={backgroundMediaStyles}>
            <div className="more-info">
              <span className="more-info--text">Learn More</span>
              <span className="more-info--icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19">
                  </line>
                  <line x1="5" y1="12" x2="19" y2="12">
                  </line>
                </svg>
              </span>
            </div>
          </div>
        </Link>
        <div className="content">
          <Link to={`/id/${this.props.bnb.id}`} style={{ textDecoration: 'none' }}>
            <h2>{this.props.bnb.houseType} · {this.props.bnb.location.city}, {this.props.bnb.location.country}</h2>
            <h1>{this.props.bnb.title}</h1>
            <p><span className="price">${this.props.bnb.payment.cost}</span> per night {paymentDescription ? this.getPaymentDescription(paymentDescription) : null}</p>
          </Link>
          <div className="bnb-stats">
            <div className="rating-data">
              <div>Rating: {starNumber} stars / {this.props.bnb.rating.reviews} reviews</div>
            </div>
            <div className="host-info" alt={this.props.bnb.host.name} title={this.props.bnb.host.name}>
              {isSuperHost ? this.getSuperHostIcon() : this.getHostIcon() }
              <a href="/">{this.props.bnb.host.name}</a>
            </div>
          </div>
        </div>
      </section>
      </BrowserRouter>
    );
  }
}

export default BnbListings;

BnbListings.propTypes = {
  bnb: PropTypes.shape({
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string
    }),
    payment: PropTypes.object,
    payment: PropTypes.shape({
      cost: PropTypes.number,
      description: PropTypes.string
    }),
    host: PropTypes.object,
    host: PropTypes.shape({
      name: PropTypes.string,
      isSuperhost: PropTypes.bool
    }),
    rating: PropTypes.object,
    rating: PropTypes.shape({
      stars: PropTypes.number,
      reviews: PropTypes.number
    })
  })
};
