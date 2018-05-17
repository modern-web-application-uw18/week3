import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rental from '../Rental/Rental';

class RentalList extends Component {  
  render() {
    return (      
      <div className="row">
          {this.props.listingsShowAll.map((product, index) =>
          <Rental rentalAdd={this.props.rentalAdd(index)} key={index} id={index} title={product.title} image={product.image} cost={product.payment.cost} />
        )}
      </div>
    );
  }
}

RentalList.propTypes = {  
  rentalAdd: PropTypes.func,
  listingsShowAll: PropTypes.array
};

export default RentalList;
