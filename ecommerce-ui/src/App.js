import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBarGridList from './Properties';
import ShoppingCartPanel from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddedToCart = this.handleAddedToCart.bind(this);
    this.state = {propertyAdded: []}
  }

  handleAddedToCart(property) {
    console.log(property);
    this.setState({propertyAdded: property});
  }

  render() {
    const favoritedProperties = this.state.propertyAdded;

    return (
      <MuiThemeProvider >
      <ShoppingCartPanel 
      property={favoritedProperties}
      onPropertyAdded={this.handleAddedToCart}
      />
      <TitleBarGridList 
      property={favoritedProperties}
      onPropertyAdded={this.handleAddedToCart}
      />
    </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
