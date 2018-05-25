import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import Location from './components/Location';
import airbandbs from './data/airbandbs.json';

// console.log({airbandbs});

class App extends Component {
  render() {

    return (

      <div className="App">
        <header className="App-header">
          <h4 className="App-cart"><a href="#">cart</a></h4>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <section>
          {/* <Location airbandbs={airbandbs[0]} /> */}

          {airbandbs.map((airbandbs, idx) => {
            return <Location key={idx} airbandbs={airbandbs} />
          })}

        </section>
      </div>
    );
  }
}

export default App;
