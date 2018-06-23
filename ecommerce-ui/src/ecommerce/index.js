import React, { Component } from 'react';
import PropertyList from './PropertyList';
import Cart from './Cart';
import './AirbnbStyles.css';
import airbnbs from './airbnbs.json';

class Airbnb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
      allItems: airbnbs
    };
  }

  // addToCart(id) {
  //   const {itemsInCart} = this.state;
  //   const newItem = this.newItem.value;
  //
  //   this.setState({
  //     itemsInCart: [...this.state.itemsInCart, newItem]
  //   })
  // }

  addToCart = (id) => {
     return (e) => {
       this.setState((prevState, props) => {
         let newArray = prevState.itemsInCart.concat(this.state.allItems[id]);
         return { itemsInCart: newArray }
       });
     }
   }

 removeFromCart = (id) => {
   return (e) => {
     this.setState((prevState, props) => {
       let newArray = this.removeByIndex(prevState.itemsInCart, id);
       return { itemsInCart: newArray };
     });
     e.preventDefault();
   }
 }

 getCartTotal = () => {
   let currentTotal = 0;
   for (var i = 0; i < this.state.itemsInCart.length; i++) {
     currentTotal = this.state.itemsInCart[i].payment.cost + currentTotal;
   }
   return currentTotal;
 }

 removeByIndex(array, index) {
   return array.filter(function (el, id) {
     return index !== id;
   });
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-name">Airbnb(clone)</h1>
        </header>
        <div className="row">
          <div className="col-12">
            <section>
              <Cart
                itemsInCart={this.state.itemsInCart}
                removeFromCart={this.removeFromCart}
                getCartTotal={this.getCartTotal}
              />
            </section>

          <div className="col-4">
            <PropertyList
              allItems={this.state.allItems}
              addToCart={this.addToCart}
            />
          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Airbnb;
