import React, { Component } from 'react';
import './App.css';
import Data from './myData.js';
import ShoppingCart from './shoppingCart';

class App extends Component {

  render() {
    const data = Data; //must be defined in render 

    return (
      <div className="App">
        < ShoppingCart data={data} key={data.id}/> 
      </div>
    );
  }
}

export default App;
