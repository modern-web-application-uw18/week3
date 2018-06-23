import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropertyItem extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-4 items">
          <h2>{this.props.title}</h2>
          <img src={this.props.image} alt={this.props.title} />
          <p>Host: {this.props.host}, offering their: {this.props.type}</p>
          <p>Where: {this.props.city}, {this.props.country}</p>
          <h4>Cost: {'$' + this.props.cost}</h4>
          <button value={this.props.id} onClick={this.props.addToCart}
            className="cartBtn">Add to cart!</button>
        </div>
      </div>
    );
  }
}

PropertyItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  host: PropTypes.string,
  type: PropTypes.string,
  cost: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string
};

export default PropertyItem;
