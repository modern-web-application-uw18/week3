import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product';
import airbnbs from './airbnbs.json';
import ShoppingCart from './ShoppingCart/ShoppingCart';

class App extends Component {
  
  
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <ShoppingCart />
          <div className="row">
             {airbnbs.map((airbnb, index) =>
              <Product key={index} title={airbnb.title} image={airbnb.image} cost={airbnb.payment.cost} />
            )}
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
