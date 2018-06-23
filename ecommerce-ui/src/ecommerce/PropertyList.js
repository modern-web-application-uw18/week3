import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropertyItem from './PropertyItem';
import airbnbs from './airbnbs.json';

class PropertyList extends Component {
  render(){
    return(
      <div className="list">
        {airbnbs.map((airbnb, idx) =>
          <PropertyItem addToCart={this.props.addToCart(idx)}
          key={idx}
          id = {idx}
          title = {airbnb.title}
          image = {airbnb.image}
          host = {airbnb.host.name}
          type = {airbnb.houseType}
          cost = {airbnb.payment.cost}
          city = {airbnb.location.city}
          country = {airbnb.location.country}/>
          )}
      </div>
    );
  }
}

PropertyList.propTypes = {
  addToCart: PropTypes.func,
  allItems: PropTypes.array
}

export default PropertyList;
