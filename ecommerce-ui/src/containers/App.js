import React, { Component } from 'react';
import Layout from './Layout/Layout'
import Aux from '../hoc/Auxl';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux>
    );
  }
}

export default App;
