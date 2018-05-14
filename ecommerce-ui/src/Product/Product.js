import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {
  

  render() {
    
    return (
      
      <div className="col-4">
        <img src={this.props.image} alt="" />
        <h2>{this.props.title}</h2>
        <p>${this.props.cost}</p>
        <button value={this.props.id} onClick={this.props.addToCart} className="btn btn-secondary">Add to cart</button>
        
      </div> 
         
    );
  }
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number,
  addToCart: PropTypes.func

};

export default Product;
