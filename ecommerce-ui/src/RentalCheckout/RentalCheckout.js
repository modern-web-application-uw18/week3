import React, { Component } from 'react';
import RentalList from '../RentalList/RentalList';
import RentalCart from '../RentalCart/RentalCart';
import products from '../airbnbs.json';

class RentalCheckout extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        listingsShowAll: products,
        productsInCart: []
    };
}

rentalAdd = (id) => {  
    return (event) => {     
      this.setState((prevState, props) => {
        let arrayCreate = prevState.productsInCart.concat(this.state.listingsShowAll[id]);
        return { productsInCart: arrayCreate }
      });
    }
  }

selectRemoval(array, index) {
  return array.filter(function (el, i) {    
    return index !== i;
  });
}

cancelYourRent = (index) => {  
  return (event) => { 
    console.log("the index is: ", index);
    this.setState((prevState, props) => {
      let arrayCreate = this.selectRemoval(prevState.productsInCart, index);
      console.log(JSON.stringify(arrayCreate));
      return { productsInCart: arrayCreate };
    });    
    event.preventDefault();
  }
} 

whatRentalTotal = () => {
  var costTotal = 0;
  for (var i = 0; i < this.state.productsInCart.length; i++) {
       costTotal = costTotal + this.state.productsInCart[i].payment.cost;         
  }
  return costTotal; 
}
  
  render() {
    return (
        <div>
          <RentalCart productsInCart={this.state.productsInCart} cancelYourRent={this.cancelYourRent} whatRentalTotal={this.whatRentalTotal} />
          <RentalList listingsShowAll={this.state.listingsShowAll} rentalAdd={this.rentalAdd} />
        </div> 
    );
  }
}

export default RentalCheckout;
