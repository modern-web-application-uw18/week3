import React, { Component } from 'react';
import AirBnbList from './AirBnbList'
import ShoppingCart from './ShoppingCart'
import './components.css';

class RentalPage extends Component {
  render() {
    return (
    <div>
        <div className="App">
          < ShoppingCart /> 
        </div>
        
        <div className="App">
          < AirBnbList />
        </div>
    </div>
    );
  }
}

export default RentalPage;
