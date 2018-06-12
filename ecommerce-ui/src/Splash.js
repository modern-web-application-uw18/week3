import React, { Component } from 'react';
import data from './data/airBnbData.json';
import Rentals from './components/rentals/Rentals';
import Cart from './components/cart/Cart';
import './Splash.css';
import { removeRental } from "./utility";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inCart: []
    };
  }

  addRental = (id) => {
    return (e) => {
      this.setState((prevState, props) => {
        let addedListing = prevState.inCart.concat(data[id]);
        document.getElementById('cart-title').scrollIntoView();
        return { inCart: addedListing }
      });
    }
  }

  deleteRental = (index) => {
    return (e) => {
      this.setState((prevState, props) => {
        let removedListing = removeRental(prevState.inCart, index);
        return { inCart: removedListing };
      });
    }
  }

  render() {

    return (
        <article className='splash-container'>
          <Rentals
            listings={data}
            addRental={this.addRental} />

          <Cart
            inCart={this.state.inCart}
            deleteRental={this.deleteRental} />
        </article>
    );
  }
}


export default Splash;
