import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';
import Card from './Card';
import ShoppingCart from './ShoppingCart';
import airbnbs from './airbnbs.json';

class App extends Component {	
  render() {
    return (
      <div>
				<ShoppingCart/>
				<br></br>
        <h2>Airbnbs</h2>
				<div className="flex-container">
				  {airbnbs.map((listing, idx) => {
					  return <Card key={idx} listing={listing} />;
          })}
				</div>
      </div>
    );
  }
}

export default App;
