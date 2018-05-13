import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';


class ProductList extends Component {
  
  render() {
    return (
      
      <div className="row">
          {this.props.allProducts.map((product, index) =>
          <Product addToCart={this.props.addToCart(index)} key={index} id={index} title={product.title} image={product.image} cost={product.payment.cost} />
        )}
      </div>
    );
  }
}

ProductList.propTypes = {  
  addToCart: PropTypes.func,
  allProducts: PropTypes.array
};

export default ProductList;
