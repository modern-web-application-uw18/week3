import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import products from '../airbnbs.json';

class Store extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        allProducts: products,
        productsInCart: []
    };
}

/* addToCart = (id) => {
  console.log("my id is: ", id);
  this.setState((prevState, props) => {
    return { productsInCart: prevState.productsInCart.concat(this.state.allProducts[id]) }
  });
} */

addToCart = (id) => {
  //console.log("my id is: ", id);
    return (event) => {
      //console.log("my id is: ", id);
      //console.log("my event is: ", event);
      this.setState((prevState, props) => {
        let newArray = prevState.productsInCart.concat(this.state.allProducts[id]);
        return { productsInCart: newArray }
      });
    }
  }

removeFromCart = (index) => {  
  return (event) => { 
    console.log("the index is: ", index);
    this.setState((prevState, props) => {
      let newArray = this.removeByIndex(prevState.productsInCart, index);
      console.log(JSON.stringify(newArray));
      return { productsInCart: newArray };
    });    
    event.preventDefault();
  }
} 

removeByIndex(array, index) {
  return array.filter(function (el, i) {    
    return index !== i;
  });
}


getCartTotal = () => {
  var sum = 0;
  for (var i = 0; i < this.state.productsInCart.length; i++) {
       sum = sum + this.state.productsInCart[i].payment.cost;         
  }
  return sum; 
}
  
  render() {
    return (
        <div className="container">
          <ShoppingCart productsInCart={this.state.productsInCart} removeFromCart={this.removeFromCart} getCartTotal={this.getCartTotal} />
          <ProductList allProducts={this.state.allProducts} addToCart={this.addToCart} />
        </div> 
    );
  }
}


export default Store;
