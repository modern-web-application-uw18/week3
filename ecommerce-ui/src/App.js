import React, { Component } from 'react';
import './App.css';
import homes from './airbnbs.json';
import Home from './Home/Home.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airbnb Homes for Rent</h1>
        </header>
 
        <div className="App-home-container">
          {homes.map((home, idx) => {
            return <Home idx={idx} home={home} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
