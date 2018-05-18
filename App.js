import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Todolist from './Todolist'; // import the new folder we made in the src folder placeholder for l8r
import Cardlist from './Cardlist';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <header className="App-header">

          <h1 className="App-title">Find your dwelling</h1>
        </header>
          
          {/*<Todolist />*/}
        </div>


          <Cardlist className='Cards' />
      </div>
    );
  }
}
// removed from jsx
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React yo</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// added jsx element <Todolist />

export default App;

// simplest component extends the component class and rendersa  function, but it isn't html, it is jsx.
