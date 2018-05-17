import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BnbDetails.css';
import airbnbs from '../airbnbs.json';
import SuperHostIcon from './SuperHostIcon';
import HostIcon from './HostIcon';
import BookForm from './BookForm';

class BnbDetails extends Component {
  constructor(props) {
    super(props);
  }

  getHostIcon() {
    return (
      <div className="host-icon">
        <HostIcon />
      </div>
    );
  }

  getSuperHostIcon() {
    return (
      <div className="host-icon">
        <SuperHostIcon />
      </div>
    );
  }

  getPaymentDescription(descript) {
    return (
      <span>
        · {descript}
      </span>
    );
  };

  render() {
    const itemID = this.props.match.params.id;
    const obj = airbnbs.find(function (obj) { return obj.id === itemID;});
    const isSuperHost = obj.host.isSuperhost;
    const paymentDescription = obj.payment.description;
    return (
      <section className="bnb-details">
        <div className="media">
          <img src={obj.image} alt={obj.title} title={obj.title}/>
        </div>
        <div className="content">
        <h2>{obj.houseType} · {obj.location.city}, {obj.location.country}</h2>
        <h1>{obj.title}</h1>
        <p><span className="price">${obj.payment.cost}</span> per night  {paymentDescription ? this.getPaymentDescription(paymentDescription) : null}</p>
        <div className="bnb-stats">
          <div className="rating-data">
            <p>Rating: {obj.rating.stars} stars / {obj.rating.reviews} reviews</p>
          </div>
          <div className="host-info" alt={obj.host.name} title={obj.host.name}>
            {isSuperHost ? this.getSuperHostIcon() : this.getHostIcon() }
            <a href="/">{obj.host.name}</a>
          </div>
        </div>
        <BookForm bnb={obj} addItemToCart={this.props.addItemToCart}/>
        </div>
      </section>

    );
  }
}

export default BnbDetails;

BnbDetails.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
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
};
