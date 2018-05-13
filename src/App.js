import React, { Component } from 'react';
import AirBnbList from './components/AirBnbList'
import ShoppingCart from './components/ShoppingCart'
import './App.css';

class App extends Component {
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

export default App;
