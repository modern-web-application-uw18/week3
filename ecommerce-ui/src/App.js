import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList/ProductList';
import ShoppingCart from './ShoppingCart/ShoppingCart';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <ShoppingCart />
          <ProductList />
        </div>        
      </div>
    );
  }
}

export default App;
