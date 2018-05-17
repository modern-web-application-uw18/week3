import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutListItem extends Component {

  render() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateOfStay = new Date(this.props.item.stay);
    const idListItem = this.props.id;
    return (
      <li id={idListItem}>
        <div className="checkout-list-item">
          <div className="checkout-list-item--remove">
            <p onClick={this.props.removeItemFromCart.bind(this, idListItem)}>Remove</p>
          </div>
          <div className="media">
            <img src={this.props.item.image} alt={this.props.item.title} />
          </div>
          <div className="checkout-list-item--details">
            <h1>{this.props.item.title}</h1>
            <h2>{this.props.item.houseType} · {this.props.item.city}, {this.props.item.country}</h2>
          </div>
          <div className="checkout-list-item--stay">
            <p>Dates: {monthNames[dateOfStay.getMonth()]} {dateOfStay.getDay()}, {dateOfStay.getFullYear()}</p>
          </div>
          <div className="checkout-list-item--payment">
            <p>${this.props.item.paymentCost}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CheckoutListItem;

CheckoutListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string,
    country: PropTypes.string,
    paymentCost: PropTypes.number.isRequired,
    paymentDescription: PropTypes.string,
    stay: PropTypes.string.isRequired
  })
};
