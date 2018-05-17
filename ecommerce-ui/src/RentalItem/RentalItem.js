import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../RentalCart/RentalCart.css';

class RentalItem extends Component {  
  render() {
    return (
      <ul>
        <li className="listingscart-item">
            <div className="listingscart-details-name">{this.props.title}
            </div>
            <div className="listingscart-details-remove">
                <button onClick={this.props.cancelYourRent} className="listingscart-remove">×</button>
            </div>
            <div className="listingscart-details-price"> <span className="listingscart-price">${this.props.cost}</span> </div>
        </li>
      </ul>
    );
  }
}

RentalItem.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  cancelYourRent: PropTypes.func
}

export default RentalItem;
