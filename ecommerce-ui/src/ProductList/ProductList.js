import React, { Component } from 'react';
import Product from '../Product/Product';
import products from '../airbnbs.json';

class ProductList extends Component {

  addProduct = (id) => {
    const product = products[id];

    // TODO: How do I call the addProduct method of the ShoppingCart component?
    // shoppingCart.addProduct(product);
  }
  
  
  render() {
    return (
      
      <div className="row">
          {products.map((product, index) =>
          <Product key={index} id={index} title={product.title} image={product.image} cost={product.payment.cost} />
        )}
      </div>
    );
  }
}

export default ProductList;
