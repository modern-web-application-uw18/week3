import React, { Component } from 'react';
import AirBnbList from './AirBnbList'
import ShoppingCart from './ShoppingCart'
import './components.css';
import airbnbs from '../airbnbs.json';

class RentalPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        selectedRentals: [],
        allBnbs: airbnbs
    };
}

// functions (help from Raymond's solution)

addRental = (id) => {
    return (event) => {
      this.setState((prevState, props) => {
        let newArray = prevState.selectedRentals.concat(this.state.allBnbs[id]);
        return { selectedRentals: newArray }
      });
    }
  }

removeRental = (id) => {  
  return (event) => { 
    this.setState((prevState, props) => {
      let newArray = this.removeByIndex(prevState.selectedRentals, id);
      return { selectedRentals: newArray };
    }); 
    event.preventDefault();
  }
} 

getCartTotal = () => {
  let currentTotal = 0;
  for (var i = 0; i < this.state.selectedRentals.length; i++) {
    currentTotal = this.state.selectedRentals[i].payment.cost + currentTotal;         
  }
  return currentTotal; 
}

// referenced in removeRental()
removeByIndex(array, index) {
  return array.filter(function (el, id) {    
    return index !== id;
  });
}

  // components rendered

  render() {
    return (
        <div className="rental-page">
          <ShoppingCart selectedRentals={this.state.selectedRentals} removeRental={this.removeRental} getCartTotal={this.getCartTotal} />
          <AirBnbList allBnbs={this.state.allBnbs} addRental={this.addRental} />
        </div> 
    );
  }
}


export default RentalPage;

