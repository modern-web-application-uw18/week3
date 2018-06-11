import React, { Component } from 'react';
import data from './data/airBnbData.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {data.map((item,index) => {
          return <p key={index}>{item.title}</p>
        })}
      </div>
    );
  }
}

export default App;
