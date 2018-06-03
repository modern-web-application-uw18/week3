import React, {Component} from 'react';
import './shoppingCart.css';
import PropTypes from 'prop-types';


class ShoppingCart extends Component {

    render(){
        return (
           <div className='Shopping-cart'>  
  {this.props.bookedRental.location.city} {this.props.bookedRental.houseType}...${this.props.bookedRental.payment.cost}/night...
          </div>        
       );     
    }
}

ShoppingCart.propTypes = {
  bookedRental: PropTypes.shape ({
      location: PropTypes.shape({
          city: PropTypes.string,
          country:PropTypes.string
      })

  })
};



export default ShoppingCart;