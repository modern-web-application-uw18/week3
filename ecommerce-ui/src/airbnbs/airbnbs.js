import React, { Component } from 'react';
import airbnbs from './airbnbs.json';
import AddRental from '../addRental/addRental';
import Cart from '../cart/cart';
import '../App.css';
import CartTotal from '../cartTotal/cartTotal';

class Airbnblocation extends Component{
    constructor(props){
        super(props);
        this.state= {
            locations: airbnbs,
            cart:[],
        };
    }


  addRental = (data) => {
      this.setState((prevState, props) => {
          const cart = data;
          const newCart = prevState.cart;
          newCart.push(cart);
          return {
              cart: newCart,
          };
      });
  }

   deleteRental = (index) => {
    this.setState((prevState, props) => {
        const newCart = prevState.cart;
        newCart.splice(index, 1);
        return {
            cart: newCart
        };
    });
}

      render() {
        let locations = this.state.locations.map((locations, idx) => {
          return(
              <AddRental key={idx}
              addRental={this.addRental}
              image={locations.image}
              title={locations.title}
              stars={locations.rating.stars}
              numberofreviews={locations.rating.reviews}
              houseType={locations.houseType}
              city={locations.location.city}
              country={locations.location.country}
              cost={locations.payment.cost}
              description={locations.payment.description}
              host={locations.host.name}
              issuperhost={locations.host.isSuperhost}
              />
            )
      })
      let shoppingCart = this.state.cart.map((cart, idx) => {   
          return(
            <Cart key={idx}
            index={idx}
            deleteRental={this.deleteRental}
            image={cart.image}
            title={cart.title}
            stars={cart.stars}
            numberofreviews={cart.reviews}
            houseType={cart.houseType}
            city={cart.city}
            country={cart.country}
            cost={cart.cost}
            description={cart.description}
            host={cart.name}
            issuperhost={cart.isSuperhost}
            />
          )
    })
      return (

        <div>
          <h3>Cart</h3>
          <CartTotal
          cost={this.state.cart}/>
          <div  className="flex-container">
          {shoppingCart}
          </div>
          <h3>Pick your destination!</h3>
          <div className="flex-container">{locations}</div>
        </div>

      )
    }
    }

    export default Airbnblocation;
